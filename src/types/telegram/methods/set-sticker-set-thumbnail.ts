import { ReadStream } from "fs";

export interface SetStickerSetThumbnail {
	name: string;
	user_id: number;
	thumbnail?: ReadStream | string;
}
