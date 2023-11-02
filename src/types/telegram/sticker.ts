import { PhotoSize } from "./photo";
import { File } from "./file";
import { MaskPosition } from "./mask-position";

export type StickerType = "regular" | "mask" | "custom_emoji";
export type StickerFormat = "static" | "animated" | "video";

export interface Sticker {
	file_id: string;
	file_unique_id: string;
	type: StickerType;
	width: number;
	height: number;
	is_animated: boolean;
	is_video: boolean;
	thumbnail?: PhotoSize;
	emoji?: string;
	set_name?: string;
	premium_animation?: File;
	mask_position?: MaskPosition;
	custom_emoji_id?: string;
	needs_repainting?: true;
	file_size?: number;
}

export interface InputSticker {
	sticker: string;
	emoji_list: string[];
	mask_position?: MaskPosition;
	keywords?: string[];
}

export interface StickerSet {
	name: string;
	title: string;
	sticker_type: StickerType;
	is_animated: boolean;
	is_video: boolean;
	stickers: Sticker[];
	thumbnail?: PhotoSize;
}
