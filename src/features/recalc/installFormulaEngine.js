// Branche dans FortuneSheet l'analyseur qui garde l'arbre des formules
// (src/lib/formula-parser), avec la fonction GEO (hostValues.js), le
// recalcul par index inverse (execFunctionGroup.js) et les listes dans les
// cellules (helper/list.js). À importer avant la
// création du premier Workbook : l'analyseur est choisi à la création de son
// contexte.
import {
  __doccellsConfigureFormulaEngine as configureFormulaEngine,
  __doccellsConfigureLists as configureLists,
} from "@fortune-sheet/core";
import { Parser } from "../../lib/formula-parser/index.js";
import { formatList, parseListInput } from "../../lib/formula-parser/helper/list.js";
import { execFunctionGroup } from "./execFunctionGroup.js";
import { installHostFunction } from "./hostValues.js";

class DocCellsParser extends Parser {
  constructor() {
    super();
    installHostFunction(this);
  }
}

export const installFormulaEngine = () =>
  configureFormulaEngine({ Parser: DocCellsParser, execFunctionGroup });

// Revenir au moteur d'origine (tests de comparaison).
export const uninstallFormulaEngine = () => configureFormulaEngine(null);

installFormulaEngine();
configureLists({ parse: parseListInput, format: formatList });
