import { FortuneFile } from "./ToFortuneSheet/FortuneFile.js";
import { HandleZip } from "./HandleZip.js";
export const transformExcelToFortune = async (excelFile) => {
    const files = await new HandleZip(excelFile).unzipFile();
    const fortuneFile = new FortuneFile(files, excelFile.name);
    fortuneFile.Parse();
    return fortuneFile.serialize();
};
