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
	parse_mode?: string;
	caption_entities?: MessageEntity[];
	width?: number;
	height?: number;
	duration?: number;
	has_spoiler?: boolean;
}

export interface InputMediaDocument {
	type: "document";
	media: string;
	thumbnail?: ReadStream | string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: MessageEntity[];
	disable_content_type_detection?: boolean;
}

export interface InputMediaAudio {
	type: "audio";
	media: string;
	thumbnail?: ReadStream | string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: MessageEntity[];
	duration?: number;
	performer?: string;
	title?: string;
}

export interface InputMediaVideo {
	type: "video";
	media: string;
	thumbnail?: ReadStream | string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: MessageEntity[];
	width?: number;
	height?: number;
	duration?: number;
	supports_streaming?: boolean;
	has_spoiler?: boolean;
}

export interface InputMediaPhoto {
	type: "photo";
	media: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: MessageEntity[];
	has_spoiler?: boolean;
}
