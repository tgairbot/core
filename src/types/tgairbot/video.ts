import { PhotoSize } from "./photo";

export interface Video {
	fileId: string;
	fileUniqueId: string;
	width: number;
	height: number;
	duration: number;
	thumbnail?: PhotoSize;
	fileName?: string;
	mimeType?: string;
	fileSize?: number;
}

export interface VideoNote {
	fileId: string;
	fileUniqueId: string;
	length: number;
	duration: number;
	thumbnail?: PhotoSize;
	fileSize?: number;
}
