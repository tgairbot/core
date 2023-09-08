import { PhotoSize } from "./photo";

export interface Video {
	file_id: string;
	file_unique_id: string;
	width: number;
	height: number;
	duration: number;
	thumbnail?: PhotoSize;
	file_name?: string;
	mime_type?: string;
	file_size?: number;
}

export interface VideoNote {
	file_id: string;
	file_unique_id: string;
	length: number;
	duration: number;
	thumbnail?: PhotoSize;
	file_size?: number;
}
