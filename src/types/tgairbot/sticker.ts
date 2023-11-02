import { PhotoSize } from "./photo";
import { File } from "./file";
import { MaskPosition } from "./mask-position";
import { StickerType } from "../telegram";

export interface Sticker {
	fileId: string;
	fileUniqueId: string;
	type: StickerType;
	width: number;
	height: number;
	isAnimated: boolean;
	isVideo: boolean;
	thumbnail?: PhotoSize;
	emoji?: string;
	setName?: string;
	premiumAnimation?: File;
	maskPosition?: MaskPosition;
	customEmojiId?: string;
	needsRepainting?: true;
	fileSize?: number;
}

export interface InputSticker {
	sticker: string;
	emojiList: string[];
	maskPosition?: MaskPosition;
	keywords?: string[];
}

export interface StickerSet {
	name: string;
	title: string;
	stickerType: StickerType;
	isAnimated: boolean;
	isVideo: boolean;
	stickers: Sticker[];
	thumbnail?: PhotoSize;
}
