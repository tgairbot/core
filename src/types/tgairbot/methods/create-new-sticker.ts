import { InputSticker } from "../sticker";
import { StickerFormat, StickerType } from "../../telegram";

export interface CreateNewSticker {
	userId: number;
	name: string;
	title: string;
	stickers: InputSticker[];
	stickerFormat: StickerFormat;
	stickerType?: StickerType;
	needsRepainting?: boolean;
}
