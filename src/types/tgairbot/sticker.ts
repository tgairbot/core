import { PhotoSize } from "./photo";
import { File } from "./file";
import { MaskPosition } from "./mask-position";
import { StickerType } from "../telegram/sticker";

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
