import { FortuneFile } from "./ToFortuneSheet/FortuneFile.js";
import { HandleZip } from "./HandleZip.js";
import { extractExcelDefinedNames } from "../../features/definedNames/excelDefinedNames.js";
export const transformExcelToFortune = async (excelFile) => {
    const files = await new HandleZip(excelFile).unzipFile();
    const fortuneFile = new FortuneFile(files, excelFile.name);
    fortuneFile.Parse();
    const serialized = fortuneFile.serialize();
    serialized.definedNames = extractExcelDefinedNames(files["xl/workbook.xml"]);
    return serialized;
};
