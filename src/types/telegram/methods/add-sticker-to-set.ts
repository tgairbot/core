import { InputSticker } from "../sticker";

export interface AddStickerToSet {
	user_id: number;
	name: string;
	sticker: InputSticker;
}
