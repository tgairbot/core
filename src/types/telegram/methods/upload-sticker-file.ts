import { ReadStream } from "fs";
import { StickerFormat } from "../sticker";

export interface UploadStickerFile {
	user_id: number;
	sticker: ReadStream;
	sticker_format: StickerFormat;
}
