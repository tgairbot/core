import { InputSticker } from "../sticker";

export interface AddStickerToSet {
	userId: number;
	name: string;
	sticker: InputSticker;
}
