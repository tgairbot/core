import { PhotoSize } from "./photo";

export interface Audio {
	fileId: string;
	fileUniqueId: string;
	duration: number;
	performer?: string;
	title?: string;
	fileName?: string;
	mimeType?: string;
	fileSize?: number;
	thumbnail?: PhotoSize;
}

export interface Voice {
	fileId: string;
	fileUniqueId: string;
	duration: number;
	mimeType?: string;
	fileSize?: number;
}
