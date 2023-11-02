import { ReadStream } from "fs";
import { StickerFormat } from "../../telegram";

export interface UploadStickerFile {
	userId: number;
	sticker: ReadStream;
	stickerFormat: StickerFormat;
}
