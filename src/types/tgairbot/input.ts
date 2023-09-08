import { ReadStream } from "fs";
import { MessageEntity } from "./message";

export type InputMedia =
	| InputMediaAnimation
	| InputMediaDocument
	| InputMediaAudio
	| InputMediaVideo
	| InputMediaPhoto;

export interface InputMediaAnimation {
	type: "animation";
	media: string;
	thumbnail?: ReadStream | string;
	caption?: string;
	parseMode?: string;
	captionEntities?: MessageEntity[];
	width?: number;
	height?: number;
	duration?: number;
	hasSpoiler?: boolean;
}

export interface InputMediaDocument {
	type: "document";
	media: string;
	thumbnail?: ReadStream | string;
	caption?: string;
	parseMode?: string;
	captionEntities?: MessageEntity[];
	disableContentTypeDetection?: boolean;
}

export interface InputMediaAudio {
	type: "audio";
	media: string;
	thumbnail?: ReadStream | string;
	caption?: string;
	parseMode?: string;
	captionEntities?: MessageEntity[];
	duration?: number;
	performer?: string;
	title?: string;
}

export interface InputMediaVideo {
	type: "video";
	media: string;
	thumbnail?: ReadStream | string;
	caption?: string;
	parseMode?: string;
	captionEntities?: MessageEntity[];
	width?: number;
	height?: number;
	duration?: number;
	supportsStreaming?: boolean;
	hasSpoiler?: boolean;
}

export interface InputMediaPhoto {
	type: "photo";
	media: string;
	caption?: string;
	parseMode?: string;
	captionEntities?: MessageEntity[];
	hasSpoiler?: boolean;
}
