import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

export const exportToExcel = async (sheetsData) => {
  const convertColor = (hex) => {
    if (!hex || !hex.startsWith("#")) return undefined;
    const cleanHex = hex.replace("#", "").toUpperCase();
    return `FF${cleanHex}`;
  };

  if (!sheetsData || sheetsData.length === 0) {
    console.error("❌ Aucune donnée à exporter !");
    return;
  }

  const workbook = new ExcelJS.Workbook();

  for (const sheet of sheetsData) {
    const { name, celldata, config } = sheet;
    if (!celldata || celldata.length === 0) {
      console.warn(
        `⚠️ La feuille "${name}" est vide, elle ne sera pas exportée.`
      );
      continue;
    }

    const worksheet = workbook.addWorksheet(name);

    if (config?.columnlen) {
      worksheet.columns = Object.keys(config.columnlen).map((colIndex) => ({
        width: config.columnlen[colIndex] / 7,
      }));
    }

    if (config?.rowlen) {
      Object.keys(config.rowlen).forEach((rowIndex) => {
        worksheet.getRow(parseInt(rowIndex, 10) + 1).height =
          config.rowlen[rowIndex] / 1.5;
      });
    }

    // 🔹 Appliquer les cellules fusionnées
    if (config?.merge) {
      Object.values(config.merge).forEach(({ r, c, rs, cs }) => {
        worksheet.mergeCells(r + 1, c + 1, r + rs, c + cs);
      });
    }

    celldata.forEach(({ r, c, v }) => {
      // Récupération et modification d'une cellule spécifique
      const cell = worksheet.getCell(r + 1, c + 1);
      if (v?.VF) {
        cell.value = {
          formula: v.VF.f.startsWith("=") ? v.VF.f.slice(1) : v.VF.f,
        };
      } else if (v?.v !== undefined) {
        cell.value = v.v;
      }

      let cellStyle = {};

      if (v?.bg) {
        // Remplissage des cellules avec une couleur de fond
        cellStyle.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: convertColor(v.bg) },
        };
      }

      if (v?.fc || v?.fs || v?.ff || v?.bl || v?.it || v?.ul) {
        // Définition du style de police (gras, italique, taille...)
        cellStyle.font = {
          name: v.ff || "Arial",
          size: v.fs ? parseInt(v.fs) : 11,
          bold: !!v.bl,
          italic: !!v.it,
          underline: v.ul ? "single" : false,
          color: v.fc ? { argb: convertColor(v.fc) } : null,
        };
      }
      if (v?.ht !== undefined || v?.vt !== undefined) {
        // Configuration de l'alignement des cellules (centré, gauche, droite...)
        v.vt = v.vt === undefined ? 0 : parseInt("" + v.vt);
        v.ht = v.ht === undefined ? 1 : parseInt("" + v.ht);
        cellStyle.alignment = {
          horizontal: v.ht === 1 ? "left" : v.ht === 0 ? "center" : "right",
          vertical: v.vt === 1 ? "top" : v.vt === 0 ? "middle" : "bottom",
        };
      }

      if (Object.keys(cellStyle).length > 0) {
        cell.style = cellStyle;
      }
    });

    if (Array.isArray(config?.borderInfo)) {
      // Application des bordures aux cellules (épaisseur, type...)
      config.borderInfo.forEach((border) => {
        if (border.rangeType === "cell" && border.value) {
          const { row_index, col_index, l, r, t, b } = border.value;
          const cell = worksheet.getCell(row_index + 1, col_index + 1);
          cell.border = {
            left: l
              ? { style: "thin", color: { argb: convertColor(l.color) } }
              : undefined,
            right: r
              ? { style: "thin", color: { argb: convertColor(r.color) } }
              : undefined,
            top: t
              ? { style: "thin", color: { argb: convertColor(t.color) } }
              : undefined,
            bottom: b
              ? { style: "thin", color: { argb: convertColor(b.color) } }
              : undefined,
          };
        } else if (
          border.rangeType === "range" &&
          Array.isArray(border.range)
        ) {
          border.range.forEach((range) => {
            const { row, column, color } = range;
            if (Array.isArray(row) && Array.isArray(column)) {
              for (let r = row[0]; r <= row[1]; r++) {
                for (let c = column[0]; c <= column[1]; c++) {
                  const cell = worksheet.getCell(r + 1, c + 1);
                  cell.border = {
                    left: {
                      style: "thin",
                      color: { argb: convertColor(color) },
                    },
                    right: {
                      style: "thin",
                      color: { argb: convertColor(color) },
                    },
                    top: {
                      style: "thin",
                      color: { argb: convertColor(color) },
                    },
                    bottom: {
                      style: "thin",
                      color: { argb: convertColor(color) },
                    },
                  };
                }
              }
            }
          });
        }
      });
    }
  }

  // Création d'un nouveau classeur Excel avec la bibliothèque xlsx
  const buffer = await workbook.xlsx.writeBuffer();
  saveAs(
    new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    }),
    "export.xlsx"
  );
};
