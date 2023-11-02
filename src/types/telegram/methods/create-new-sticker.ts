import { InputSticker, StickerFormat, StickerType } from "../sticker";

export interface CreateNewSticker {
	user_id: number;
	name: string;
	title: string;
	stickers: InputSticker[];
	sticker_format: StickerFormat;
	sticker_type?: StickerType;
	needs_repainting?: boolean;
}
