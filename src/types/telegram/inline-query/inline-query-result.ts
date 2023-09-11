import { InlineKeyboardMarkup } from "../keyboard";
import { MessageEntity, ParseMode } from "../message";
import { InputMessageContent } from "./input-message-content";

export type InlineQueryResult =
	| InlineQueryResultCachedAudio
	| InlineQueryResultCachedDocument
	| InlineQueryResultCachedGif
	| InlineQueryResultCachedMpeg4Gif
	| InlineQueryResultCachedPhoto
	| InlineQueryResultCachedSticker
	| InlineQueryResultCachedVideo
	| InlineQueryResultCachedVoice
	| InlineQueryResultArticle
	| InlineQueryResultAudio
	| InlineQueryResultContact
	| InlineQueryResultGame
	| InlineQueryResultDocument
	| InlineQueryResultGif
	| InlineQueryResultLocation
	| InlineQueryResultMpeg4Gif
	| InlineQueryResultPhoto
	| InlineQueryResultVenue
	| InlineQueryResultVideo
	| InlineQueryResultVoice;

export interface InlineQueryResultCachedAudio {
	type: "audio";
	id: string;
	audio_file_id: string;
	caption?: string;
	parse_mode?: ParseMode;
	caption_entities?: MessageEntity[];
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
}

export interface InlineQueryResultCachedDocument {
	type: "document";
	id: string;
	title: string;
	document_file_id: string;
	description?: string;
	caption?: string;
	parse_mode?: ParseMode;
	caption_entities?: MessageEntity[];
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
}

export interface InlineQueryResultCachedGif {
	type: "gif";
	id: string;
	gif_file_id: string;
	title?: string;
	caption?: string;
	parse_mode?: ParseMode;
	caption_entities?: MessageEntity[];
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
}

export interface InlineQueryResultCachedMpeg4Gif {
	type: "mpeg4_gif";
	id: string;
	mpeg4_file_id: string;
	ttitle?: string;
	caption?: string;
	parse_mode?: ParseMode;
	caption_entities?: MessageEntity[];
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
}

export interface InlineQueryResultCachedPhoto {
	type: "photo";
	id: string;
	photo_file_id: string;
	title?: string;
	description?: string;
	caption?: string;
	parse_mode?: ParseMode;
	caption_entities?: MessageEntity[];
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
}

export interface InlineQueryResultCachedSticker {
	type: "sticker";
	id: string;
	sticker_file_id: string;
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
}

export interface InlineQueryResultCachedVideo {
	type: "video";
	id: string;
	video_file_id: string;
	title: string;
	description?: string;
	caption?: string;
	parse_mode?: ParseMode;
	caption_entities?: MessageEntity[];
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
}

export interface InlineQueryResultCachedVoice {
	type: "voice";
	id: string;
	voice_file_id: string;
	title: string;
	description?: string;
	caption?: string;
	parse_mode?: ParseMode;
	caption_entities?: MessageEntity[];
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
}

export interface InlineQueryResultArticle {
	type: "article";
	id: string;
	title: string;
	input_message_content: InputMessageContent;
	reply_markup?: InlineKeyboardMarkup;
	url?: string;
	hide_url?: boolean;
	description?: string;
	thumbnail_url?: string;
	thumbnail_width?: number;
	thumbnail_height?: number;
}

export interface InlineQueryResultAudio {
	type: "audio";
	id: string;
	audio_url: string;
	title: string;
	caption?: string;
	parse_mode?: ParseMode;
	caption_entities?: MessageEntity[];
	performer?: string;
	audio_duration?: number;
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
}

export interface InlineQueryResultContact {
	type: "contact";
	id: string;
	phone_number: string;
	first_name: string;
	last_name?: string;
	vcard?: string;
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
	thumbnail_url?: string;
	thumbnail_width?: number;
	thumbnail_height?: number;
}

export interface InlineQueryResultGame {
	type: "game";
	id: string;
	game_short_name: string;
	reply_markup?: InlineKeyboardMarkup;
}

export interface InlineQueryResultDocument {
	type: "document";
	id: string;
	title: string;
	caption?: string;
	parse_mode?: ParseMode;
	caption_entities?: MessageEntity[];
	document_url: string;
	mime_type: "application/pdf" | "application/zip";
	description?: string;
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
	thumbnail_url?: string;
	thumbnail_width?: number;
	thumbnail_height?: number;
}

export interface InlineQueryResultGif {
	type: "gif";
	id: string;
	gif_url: string;
	gif_width?: number;
	gif_height?: number;
	gif_duration?: number;
	thumbnail_url: string;
	thumbnail_mime_type?: "image/jpeg" | "image/gif" | "video/mp4";
	title?: string;
	caption?: string;
	parse_mode?: ParseMode;
	caption_entities?: MessageEntity[];
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
}

export interface InlineQueryResultLocation {
	type: "location";
	id: string;
	latitude: number;
	longitude: number;
	title: string;
	horizontal_accuracy?: number;
	live_period?: number;
	heading?: number;
	proximity_alert_radius?: number;
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
	thumbnail_url?: string;
	thumbnail_width?: number;
	thumbnail_height?: number;
}

export interface InlineQueryResultMpeg4Gif {
	type: "mpeg4_gif";
	id: string;
	mpeg4_url: string;
	mpeg4_width?: number;
	mpeg4_height?: number;
	mpeg4_duration?: number;
	thumbnail_url: string;
	thumbnail_mime_type?: "image/jpeg" | "image/gif" | "video/mp4";
	title?: string;
	caption?: string;
	parse_mode?: ParseMode;
	caption_entities?: MessageEntity[];
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
}

export interface InlineQueryResultPhoto {
	type: "photo";
	id: string;
	photo_url: string;
	thumbnail_url: string;
	photo_width?: number;
	photo_height?: number;
	title?: string;
	description?: string;
	caption?: string;
	parse_mode?: ParseMode;
	caption_entities?: MessageEntity[];
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
}

export interface InlineQueryResultVenue {
	type: "venue";
	id: string;
	latitude: number;
	longitude: number;
	title: string;
	address: string;
	foursquare_id?: string;
	foursquare_type?: string;
	google_place_id?: string;
	google_place_type?: string;
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
	thumbnail_url?: string;
	thumbnail_width?: number;
	thumbnail_height?: number;
}

export interface InlineQueryResultVideo {
	type: "video";
	id: string;
	video_url: string;
	mime_type: "text/html" | "video/mp4";
	thumbnail_url: string;
	title: string;
	caption?: string;
	parse_mode?: ParseMode;
	caption_entities?: MessageEntity[];
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
	video_width?: number;
	video_height?: number;
	video_duration?: number;
	description?: string;
}

export interface InlineQueryResultVoice {
	type: "voice";
	id: string;
	voice_url: string;
	title: string;
	caption?: string;
	parse_mode?: ParseMode;
	caption_entities?: MessageEntity[];
	voice_duration?: number;
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
}
