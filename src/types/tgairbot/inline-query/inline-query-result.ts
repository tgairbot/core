import { ParseMode } from "../../telegram";
import { InlineKeyboardMarkup } from "../keyboard";
import { MessageEntity } from "../message";
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
	audioFileId: string;
	caption?: string;
	parseMode?: ParseMode;
	captionEntities?: MessageEntity[];
	replyMarkup?: InlineKeyboardMarkup;
	inputMessageContent?: InputMessageContent;
}

export interface InlineQueryResultCachedDocument {
	type: "document";
	id: string;
	title: string;
	documentFileId: string;
	description?: string;
	caption?: string;
	parseMode?: ParseMode;
	captionEntities?: MessageEntity[];
	replyMarkup?: InlineKeyboardMarkup;
	inputMessageContent?: InputMessageContent;
}

export interface InlineQueryResultCachedGif {
	type: "gif";
	id: string;
	gifFileId: string;
	title?: string;
	caption?: string;
	parseMode?: ParseMode;
	captionEntities?: MessageEntity[];
	replyMarkup?: InlineKeyboardMarkup;
	inputMessageContent?: InputMessageContent;
}

export interface InlineQueryResultCachedMpeg4Gif {
	type: "mpeg4_gif";
	id: string;
	mpeg4FileId: string;
	title?: string;
	caption?: string;
	parseMode?: ParseMode;
	captionEntities?: MessageEntity[];
	replyMarkup?: InlineKeyboardMarkup;
	inputMessageContent?: InputMessageContent;
}

export interface InlineQueryResultCachedPhoto {
	type: "photo";
	id: string;
	photoFileId: string;
	title?: string;
	description?: string;
	caption?: string;
	parseMode?: ParseMode;
	captionEntities?: MessageEntity[];
	replyMarkup?: InlineKeyboardMarkup;
	inputMessageContent?: InputMessageContent;
}

export interface InlineQueryResultCachedSticker {
	type: "sticker";
	id: string;
	stickerFileId: string;
	replyMarkup?: InlineKeyboardMarkup;
	inputMessageContent?: InputMessageContent;
}

export interface InlineQueryResultCachedVideo {
	type: "video";
	id: string;
	videoFileId: string;
	title: string;
	description?: string;
	caption?: string;
	parseMode?: ParseMode;
	captionEntities?: MessageEntity[];
	replyMarkup?: InlineKeyboardMarkup;
	inputMessageContent?: InputMessageContent;
}

export interface InlineQueryResultCachedVoice {
	type: "voice";
	id: string;
	voiceFileId: string;
	title: string;
	description?: string;
	caption?: string;
	parseMode?: ParseMode;
	captionEntities?: MessageEntity[];
	replyMarkup?: InlineKeyboardMarkup;
	inputMessageContent?: InputMessageContent;
}

export interface InlineQueryResultArticle {
	type: "article";
	id: string;
	title: string;
	inputMessageContent: InputMessageContent;
	replyMarkup?: InlineKeyboardMarkup;
	url?: string;
	hideUrl?: boolean;
	description?: string;
	thumbnailUrl?: string;
	thumbnailWidth?: number;
	thumbnailHeight?: number;
}

export interface InlineQueryResultAudio {
	type: "audio";
	id: string;
	audioUrl: string;
	title: string;
	caption?: string;
	parseMode?: ParseMode;
	captionEntities?: MessageEntity[];
	performer?: string;
	audioDuration?: number;
	replyMarkup?: InlineKeyboardMarkup;
	inputMessageContent?: InputMessageContent;
}

export interface InlineQueryResultContact {
	type: "contact";
	id: string;
	phoneNumber: string;
	firstName: string;
	lastName?: string;
	vcard?: string;
	replyMarkup?: InlineKeyboardMarkup;
	inputMessageContent?: InputMessageContent;
	thumbnailUrl?: string;
	thumbnailWidth?: number;
	thumbnailHeight?: number;
}

export interface InlineQueryResultGame {
	type: "game";
	id: string;
	gameShortName: string;
	replyMarkup?: InlineKeyboardMarkup;
}

export interface InlineQueryResultDocument {
	type: "document";
	id: string;
	title: string;
	caption?: string;
	parseMode?: ParseMode;
	captionEntities?: MessageEntity[];
	documentUrl: string;
	mimeType: "application/pdf" | "application/zip";
	description?: string;
	replyMarkup?: InlineKeyboardMarkup;
	inputMessageContent?: InputMessageContent;
	thumbnailUrl?: string;
	thumbnailWidth?: number;
	thumbnailHeight?: number;
}

export interface InlineQueryResultGif {
	type: "gif";
	id: string;
	gifUrl: string;
	gifWidth?: number;
	gifHeight?: number;
	gifDuration?: number;
	thumbnailUrl: string;
	thumbnailMimeType?: "image/jpeg" | "image/gif" | "video/mp4";
	title?: string;
	caption?: string;
	parseMode?: ParseMode;
	captionEntities?: MessageEntity[];
	replyMarkup?: InlineKeyboardMarkup;
	inputMessageContent?: InputMessageContent;
}

export interface InlineQueryResultLocation {
	type: "location";
	id: string;
	latitude: number;
	longitude: number;
	title: string;
	horizontalAccuracy?: number;
	livePeriod?: number;
	heading?: number;
	proximityAlertRadius?: number;
	replyMarkup?: InlineKeyboardMarkup;
	inputMessageContent?: InputMessageContent;
	thumbnailUrl?: string;
	thumbnailWidth?: number;
	thumbnailHeight?: number;
}

export interface InlineQueryResultMpeg4Gif {
	type: "mpeg4_gif";
	id: string;
	mpeg4Url: string;
	mpeg4Width?: number;
	mpeg4Height?: number;
	mpeg4Duration?: number;
	thumbnailUrl: string;
	thumbnailMimeType?: "image/jpeg" | "image/gif" | "video/mp4";
	title?: string;
	caption?: string;
	parseMode?: ParseMode;
	captionEntities?: MessageEntity[];
	replyMarkup?: InlineKeyboardMarkup;
	inputMessageContent?: InputMessageContent;
}

export interface InlineQueryResultPhoto {
	type: "photo";
	id: string;
	photoUrl: string;
	thumbnailUrl: string;
	photoWidth?: number;
	photoHeight?: number;
	title?: string;
	description?: string;
	caption?: string;
	parseMode?: ParseMode;
	captionEntities?: MessageEntity[];
	replyMarkup?: InlineKeyboardMarkup;
	inputMessageContent?: InputMessageContent;
}

export interface InlineQueryResultVenue {
	type: "venue";
	id: string;
	latitude: number;
	longitude: number;
	title: string;
	address: string;
	foursquareId?: string;
	foursquareType?: string;
	googlePlaceId?: string;
	googlePlaceType?: string;
	replyMarkup?: InlineKeyboardMarkup;
	inputMessageContent?: InputMessageContent;
	thumbnailUrl?: string;
	thumbnailWidth?: number;
	thumbnailHeight?: number;
}

export interface InlineQueryResultVideo {
	type: "video";
	id: string;
	videoUrl: string;
	mimeType: "text/html" | "video/mp4";
	thumbnailUrl: string;
	title: string;
	caption?: string;
	parseMode?: ParseMode;
	captionEntities?: MessageEntity[];
	replyMarkup?: InlineKeyboardMarkup;
	inputMessageContent?: InputMessageContent;
	videoWidth?: number;
	videoHeight?: number;
	videoDuration?: number;
	description?: string;
}

export interface InlineQueryResultVoice {
	type: "voice";
	id: string;
	voiceUrl: string;
	title: string;
	caption?: string;
	parseMode?: ParseMode;
	captionEntities?: MessageEntity[];
	voiceDuration?: number;
	replyMarkup?: InlineKeyboardMarkup;
	inputMessageContent?: InputMessageContent;
}
