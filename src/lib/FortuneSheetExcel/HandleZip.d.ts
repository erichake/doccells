import JSZip from "jszip";
import { IuploadfileList } from "./ICommon.js";
export declare class HandleZip {
    uploadFile: File;
    workBook: JSZip;
    constructor(file: File);
    unzipFile(): Promise<IuploadfileList>;
}
