import { PhotoSize } from "./photo";

export interface Document {
	fileId: string;
	fileUniqueId: string;
	thumbnail?: PhotoSize;
	fileName?: string;
	mimeType?: string;
	fileSize?: number;
}
