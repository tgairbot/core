import { PhotoSize } from "./photo";

export interface Document {
	file_id: string;
	file_unique_id: string;
	thumbnail?: PhotoSize;
	file_name?: string;
	mime_type?: string;
	file_size?: number;
}
