import { PhotoSize } from "./photo";

export interface Animation {
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
