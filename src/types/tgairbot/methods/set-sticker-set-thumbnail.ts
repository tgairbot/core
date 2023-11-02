import { ReadStream } from "fs";

export interface SetStickerSetThumbnail {
	name: string;
	userId: number;
	thumbnail?: ReadStream | string;
}
