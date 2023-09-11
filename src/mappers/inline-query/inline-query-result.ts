import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import { MessageMapper } from "../message";
import { ReplyMarkupMapper } from "../reply-markup";
import { InputMessageContentMapper } from "./input-message-content";

// Voice types
type SelectedVoice =
	| Telegram.InlineQueryResultVoice
	| Telegram.InlineQueryResultCachedVoice;
type CombineVoice = Telegram.InlineQueryResultVoice &
	Telegram.InlineQueryResultCachedVoice;
type ConditionalVoice<
	T extends
		| Telegram.InlineQueryResultVoice
		| Telegram.InlineQueryResultCachedVoice,
> = T extends Telegram.InlineQueryResultVoice
	? TgAirBot.InlineQueryResultVoice
	: TgAirBot.InlineQueryResultCachedVoice;
type TgCombineVoice = TgAirBot.InlineQueryResultVoice &
	TgAirBot.InlineQueryResultCachedVoice;

// Audio types
type SelectedAudio =
	| Telegram.InlineQueryResultAudio
	| Telegram.InlineQueryResultCachedAudio;
type CombineAudio = Telegram.InlineQueryResultAudio &
	Telegram.InlineQueryResultCachedAudio;
type ConditionalAudio<
	T extends
		| Telegram.InlineQueryResultAudio
		| Telegram.InlineQueryResultCachedAudio,
> = T extends Telegram.InlineQueryResultAudio
	? TgAirBot.InlineQueryResultAudio
	: TgAirBot.InlineQueryResultCachedAudio;
type TgCombineAudio = TgAirBot.InlineQueryResultAudio &
	TgAirBot.InlineQueryResultCachedAudio;

// Document types
type SelectedDocument =
	| Telegram.InlineQueryResultDocument
	| Telegram.InlineQueryResultCachedDocument;
type CombineDocument = Telegram.InlineQueryResultDocument &
	Telegram.InlineQueryResultCachedDocument;
type ConditionalDocument<
	T extends
		| Telegram.InlineQueryResultDocument
		| Telegram.InlineQueryResultCachedDocument,
> = T extends Telegram.InlineQueryResultDocument
	? TgAirBot.InlineQueryResultDocument
	: TgAirBot.InlineQueryResultCachedDocument;
type TgCombineDocument = TgAirBot.InlineQueryResultDocument &
	TgAirBot.InlineQueryResultCachedDocument;

// Gif types
type SelectedGif =
	| Telegram.InlineQueryResultGif
	| Telegram.InlineQueryResultCachedGif;
type CombineGif = Telegram.InlineQueryResultGif &
	Telegram.InlineQueryResultCachedGif;
type ConditionalGif<
	T extends
		| Telegram.InlineQueryResultGif
		| Telegram.InlineQueryResultCachedGif,
> = T extends Telegram.InlineQueryResultGif
	? TgAirBot.InlineQueryResultGif
	: TgAirBot.InlineQueryResultCachedGif;
type TgCombineGif = TgAirBot.InlineQueryResultGif &
	TgAirBot.InlineQueryResultCachedGif;

// Video types
type SelectedVideo =
	| Telegram.InlineQueryResultVideo
	| Telegram.InlineQueryResultCachedVideo;
type CombineVideo = Telegram.InlineQueryResultVideo &
	Telegram.InlineQueryResultCachedVideo;
type ConditionalVideo<
	T extends
		| Telegram.InlineQueryResultVideo
		| Telegram.InlineQueryResultCachedVideo,
> = T extends Telegram.InlineQueryResultVideo
	? TgAirBot.InlineQueryResultVideo
	: TgAirBot.InlineQueryResultCachedVideo;
type TgCombineVideo = TgAirBot.InlineQueryResultVideo &
	TgAirBot.InlineQueryResultCachedVideo;

// Photo types
type SelectedPhoto =
	| Telegram.InlineQueryResultPhoto
	| Telegram.InlineQueryResultCachedPhoto;
type CombinePhoto = Telegram.InlineQueryResultPhoto &
	Telegram.InlineQueryResultCachedPhoto;
type ConditionalPhoto<
	T extends
		| Telegram.InlineQueryResultPhoto
		| Telegram.InlineQueryResultCachedPhoto,
> = T extends Telegram.InlineQueryResultPhoto
	? TgAirBot.InlineQueryResultPhoto
	: TgAirBot.InlineQueryResultCachedPhoto;
type TgCombinePhoto = TgAirBot.InlineQueryResultPhoto &
	TgAirBot.InlineQueryResultCachedPhoto;

// Mpeg4Gif types
type SelectedMpeg4Gif =
	| Telegram.InlineQueryResultMpeg4Gif
	| Telegram.InlineQueryResultCachedMpeg4Gif;
type CombineMpeg4Gif = Telegram.InlineQueryResultMpeg4Gif &
	Telegram.InlineQueryResultCachedMpeg4Gif;
type ConditionalMpeg4Gif<
	T extends
		| Telegram.InlineQueryResultMpeg4Gif
		| Telegram.InlineQueryResultCachedMpeg4Gif,
> = T extends Telegram.InlineQueryResultMpeg4Gif
	? TgAirBot.InlineQueryResultMpeg4Gif
	: TgAirBot.InlineQueryResultCachedMpeg4Gif;
type TgCombineMpeg4Gif = TgAirBot.InlineQueryResultMpeg4Gif &
	TgAirBot.InlineQueryResultCachedMpeg4Gif;

export class InlineQueryResultMapper {
	static toTAB(
		options: Telegram.InlineQueryResult,
	): TgAirBot.InlineQueryResult {
		switch (options.type) {
			case "audio":
				return InlineQueryResultMapper.inlineQueryResultAudioToTAB(
					options,
				);
			case "document":
				return InlineQueryResultMapper.inlineQueryResultDocumentToTAB(
					options,
				);
			case "gif":
				return InlineQueryResultMapper.inlineQueryResultGifToTAB(
					options,
				);
			case "mpeg4_gif":
				return InlineQueryResultMapper.inlineQueryResultMpeg4GifToTAB(
					options,
				);
			case "photo":
				return InlineQueryResultMapper.inlineQueryResultPhotoToTAB(
					options,
				);
			case "sticker":
				return InlineQueryResultMapper.inlineQueryResultStickerToTAB(
					options,
				);
			case "video":
				return InlineQueryResultMapper.inlineQueryResultVideoToTAB(
					options,
				);
			case "voice":
				return InlineQueryResultMapper.inlineQueryResultVoiceToTAB(
					options,
				);
			case "article":
				return InlineQueryResultMapper.inlineQueryResultArticleToTAB(
					options,
				);
			case "contact":
				return InlineQueryResultMapper.inlineQueryResultContactToTAB(
					options,
				);
			case "game":
				return InlineQueryResultMapper.inlineQueryResultGameToTAB(
					options,
				);
			case "location":
				return InlineQueryResultMapper.inlineQueryResultLocationToTAB(
					options,
				);
			case "venue":
				return InlineQueryResultMapper.inlineQueryResultVenueToTAB(
					options,
				);
		}
	}

	static inlineQueryResultVoiceToTAB<T extends SelectedVoice>(
		options: T,
	): ConditionalVoice<T> {
		const params = options as CombineVoice;

		const entity: TgCombineVoice = {
			id: params.id,
			title: params.title,
			type: params.type,
			voiceUrl: params.voice_url,
			caption: params.caption,
			captionEntities: params.caption_entities
				? params.caption_entities.map(MessageMapper.messageEntityToTAB)
				: undefined,
			parseMode: params.parse_mode,
			replyMarkup: params.reply_markup
				? ReplyMarkupMapper.toTAB(params.reply_markup)
				: undefined,
			voiceDuration: params.voice_duration,
			inputMessageContent: params.input_message_content
				? InputMessageContentMapper.toTAB(params.input_message_content)
				: undefined,
			description: params.description,
			voiceFileId: params.voice_file_id,
		};

		return RemoveUndefinedKeysFromObject<TgCombineVoice>(
			entity,
		) as ConditionalVoice<T>;
	}

	static inlineQueryResultArticleToTAB(
		options: Telegram.InlineQueryResultArticle,
	): TgAirBot.InlineQueryResultArticle {
		const entity: TgAirBot.InlineQueryResultArticle = {
			id: options.id,
			inputMessageContent: InputMessageContentMapper.toTAB(
				options.input_message_content,
			),
			title: options.title,
			type: options.type,
			description: options.description,
			hideUrl: options.hide_url,
			replyMarkup: options.reply_markup
				? ReplyMarkupMapper.toTAB(options.reply_markup)
				: undefined,
			thumbnailHeight: options.thumbnail_height,
			thumbnailUrl: options.thumbnail_url,
			thumbnailWidth: options.thumbnail_width,
			url: options.url,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.InlineQueryResultArticle>(
			entity,
		);
	}

	static inlineQueryResultAudioToTAB<T extends SelectedAudio>(
		options: T,
	): ConditionalAudio<T> {
		const params = options as CombineAudio;

		const entity: TgCombineAudio = {
			id: params.id,
			audioUrl: params.audio_url,
			title: params.title,
			type: params.type,
			audioDuration: params.audio_duration,
			caption: params.caption,
			captionEntities: params.caption_entities
				? params.caption_entities.map(MessageMapper.messageEntityToTAB)
				: undefined,
			inputMessageContent: params.input_message_content
				? InputMessageContentMapper.toTAB(params.input_message_content)
				: undefined,
			parseMode: params.parse_mode,
			performer: params.performer,
			replyMarkup: params.reply_markup
				? ReplyMarkupMapper.toTAB(params.reply_markup)
				: undefined,
			audioRFileId: params.audio_file_id,
		};

		return RemoveUndefinedKeysFromObject<TgCombineAudio>(
			entity,
		) as ConditionalAudio<T>;
	}

	static inlineQueryResultContactToTAB(
		options: Telegram.InlineQueryResultContact,
	): TgAirBot.InlineQueryResultContact {
		const entity: TgAirBot.InlineQueryResultContact = {
			firstName: options.first_name,
			id: options.id,
			phoneNumber: options.phone_number,
			type: options.type,
			inputMessageContent: options.input_message_content
				? InputMessageContentMapper.toTAB(options.input_message_content)
				: undefined,
			lastName: options.last_name,
			replyMarkup: options.reply_markup
				? ReplyMarkupMapper.toTAB(options.reply_markup)
				: undefined,
			thumbnailHeight: options.thumbnail_height,
			thumbnailUrl: options.thumbnail_url,
			thumbnailWidth: options.thumbnail_width,
			vcard: options.vcard,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.InlineQueryResultContact>(
			entity,
		);
	}

	static inlineQueryResultDocumentToTAB<T extends SelectedDocument>(
		options: T,
	): ConditionalDocument<T> {
		const params = options as CombineDocument;

		const entity: TgCombineDocument = {
			documentUrl: params.document_url,
			id: params.id,
			mimeType: params.mime_type,
			title: params.title,
			type: params.type,
			caption: params.caption,
			captionEntities: params.caption_entities
				? params.caption_entities.map(MessageMapper.messageEntityToTAB)
				: undefined,
			description: params.description,
			inputMessageContent: params.input_message_content
				? InputMessageContentMapper.toTAB(params.input_message_content)
				: undefined,
			parseMode: params.parse_mode,
			replyMarkup: params.reply_markup
				? ReplyMarkupMapper.toTAB(params.reply_markup)
				: undefined,
			thumbnailHeight: params.thumbnail_height,
			thumbnailUrl: params.thumbnail_url,
			thumbnailWidth: params.thumbnail_width,
			documentFileId: params.document_file_id,
		};

		return RemoveUndefinedKeysFromObject<TgCombineDocument>(
			entity,
		) as ConditionalDocument<T>;
	}

	static inlineQueryResultGameToTAB(
		options: Telegram.InlineQueryResultGame,
	): TgAirBot.InlineQueryResultGame {
		const entity: TgAirBot.InlineQueryResultGame = {
			gameShortName: options.game_short_name,
			id: options.id,
			type: options.type,
			replyMarkup: options.reply_markup
				? ReplyMarkupMapper.toTAB(options.reply_markup)
				: undefined,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.InlineQueryResultGame>(
			entity,
		);
	}

	static inlineQueryResultGifToTAB<T extends SelectedGif>(
		options: T,
	): ConditionalGif<T> {
		const params = options as CombineGif;

		const entity: TgCombineGif = {
			gifUrl: params.gif_url,
			id: params.id,
			thumbnailUrl: params.thumbnail_url,
			type: params.type,
			caption: params.caption,
			captionEntities: params.caption_entities
				? params.caption_entities.map(MessageMapper.messageEntityToTAB)
				: undefined,
			gifDuration: params.gif_duration,
			gifHeight: params.gif_height,
			gifWidth: params.gif_width,
			inputMessageContent: params.input_message_content
				? InputMessageContentMapper.toTAB(params.input_message_content)
				: undefined,
			parseMode: params.parse_mode,
			replyMarkup: params.reply_markup
				? ReplyMarkupMapper.toTAB(params.reply_markup)
				: undefined,
			thumbnailMimeType: params.thumbnail_mime_type,
			title: params.title,
			gifFileId: params.gif_file_id,
		};

		return RemoveUndefinedKeysFromObject<TgCombineGif>(
			entity,
		) as ConditionalGif<T>;
	}

	static inlineQueryResultLocationToTAB(
		options: Telegram.InlineQueryResultLocation,
	): TgAirBot.InlineQueryResultLocation {
		const entity: TgAirBot.InlineQueryResultLocation = {
			id: options.id,
			latitude: options.latitude,
			longitude: options.longitude,
			title: options.title,
			type: options.type,
			heading: options.heading,
			horizontalAccuracy: options.horizontal_accuracy,
			inputMessageContent: options.input_message_content
				? InputMessageContentMapper.toTAB(options.input_message_content)
				: undefined,
			livePeriod: options.live_period,
			proximityAlertRadius: options.proximity_alert_radius,
			replyMarkup: options.reply_markup
				? ReplyMarkupMapper.toTAB(options.reply_markup)
				: undefined,
			thumbnailHeight: options.thumbnail_height,
			thumbnailUrl: options.thumbnail_url,
			thumbnailWidth: options.thumbnail_width,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.InlineQueryResultLocation>(
			entity,
		);
	}

	static inlineQueryResultMpeg4GifToTAB<T extends SelectedMpeg4Gif>(
		options: T,
	): ConditionalMpeg4Gif<T> {
		const params = options as CombineMpeg4Gif;

		const entity: TgCombineMpeg4Gif = {
			id: params.id,
			mpeg4Url: params.mpeg4_url,
			thumbnailUrl: params.thumbnail_url,
			type: params.type,
			caption: params.caption,
			captionEntities: params.caption_entities
				? params.caption_entities.map(MessageMapper.messageEntityToTAB)
				: undefined,
			inputMessageContent: params.input_message_content
				? InputMessageContentMapper.toTAB(params.input_message_content)
				: undefined,
			replyMarkup: params.reply_markup
				? ReplyMarkupMapper.toTAB(params.reply_markup)
				: undefined,
			mpeg4Duration: params.mpeg4_duration,
			mpeg4Height: params.mpeg4_height,
			mpeg4Width: params.mpeg4_width,
			parseMode: params.parse_mode,
			thumbnailMimeType: params.thumbnail_mime_type,
			title: params.title,
			mpeg4FileId: params.mpeg4_file_id,
		};

		return RemoveUndefinedKeysFromObject<TgCombineMpeg4Gif>(
			entity,
		) as ConditionalMpeg4Gif<T>;
	}

	static inlineQueryResultPhotoToTAB<T extends SelectedPhoto>(
		options: T,
	): ConditionalPhoto<T> {
		const params = options as CombinePhoto;

		const entity: TgCombinePhoto = {
			id: params.id,
			photoUrl: params.photo_url,
			thumbnailUrl: params.thumbnail_url,
			type: params.type,
			caption: params.caption,
			captionEntities: params.caption_entities
				? params.caption_entities.map(MessageMapper.messageEntityToTAB)
				: undefined,
			inputMessageContent: params.input_message_content
				? InputMessageContentMapper.toTAB(params.input_message_content)
				: undefined,
			replyMarkup: params.reply_markup
				? ReplyMarkupMapper.toTAB(params.reply_markup)
				: undefined,
			description: params.description,
			parseMode: params.parse_mode,
			photoHeight: params.photo_height,
			photoWidth: params.photo_width,
			title: params.title,
			photoFileId: params.photo_file_id,
		};

		return RemoveUndefinedKeysFromObject<TgCombinePhoto>(
			entity,
		) as ConditionalPhoto<T>;
	}

	static inlineQueryResultVenueToTAB(
		options: Telegram.InlineQueryResultVenue,
	): TgAirBot.InlineQueryResultVenue {
		const entity: TgAirBot.InlineQueryResultVenue = {
			address: options.address,
			id: options.id,
			latitude: options.latitude,
			longitude: options.longitude,
			title: options.title,
			type: options.type,
			foursquareId: options.foursquare_id,
			foursquareType: options.foursquare_type,
			googlePlaceId: options.google_place_id,
			googlePlaceType: options.google_place_type,
			inputMessageContent: options.input_message_content
				? InputMessageContentMapper.toTAB(options.input_message_content)
				: undefined,
			replyMarkup: options.reply_markup
				? ReplyMarkupMapper.toTAB(options.reply_markup)
				: undefined,
			thumbnailHeight: options.thumbnail_height,
			thumbnailUrl: options.thumbnail_url,
			thumbnailWidth: options.thumbnail_width,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.InlineQueryResultVenue>(
			entity,
		);
	}

	static inlineQueryResultVideoToTAB<T extends SelectedVideo>(
		options: T,
	): ConditionalVideo<T> {
		const params = options as CombineVideo;

		const entity: TgCombineVideo = {
			id: params.id,
			title: params.title,
			type: params.type,
			inputMessageContent: params.input_message_content
				? InputMessageContentMapper.toTAB(params.input_message_content)
				: undefined,
			replyMarkup: params.reply_markup
				? ReplyMarkupMapper.toTAB(params.reply_markup)
				: undefined,
			mimeType: params.mime_type,
			thumbnailUrl: params.thumbnail_url,
			videoUrl: params.video_url,
			caption: params.caption,
			captionEntities: params.caption_entities
				? params.caption_entities.map(MessageMapper.messageEntityToTAB)
				: undefined,
			description: params.description,
			parseMode: params.parse_mode,
			videoDuration: params.video_duration,
			videoHeight: params.video_height,
			videoWidth: params.video_width,
			videoFileId: params.video_file_id,
		};

		return RemoveUndefinedKeysFromObject<TgCombineVideo>(
			entity,
		) as ConditionalVideo<T>;
	}

	static inlineQueryResultStickerToTAB(
		options: Telegram.InlineQueryResultCachedSticker,
	): TgAirBot.InlineQueryResultCachedSticker {
		const entity: TgAirBot.InlineQueryResultCachedSticker = {
			id: options.id,
			type: options.type,
			inputMessageContent: options.input_message_content
				? InputMessageContentMapper.toTAB(options.input_message_content)
				: undefined,
			replyMarkup: options.reply_markup
				? ReplyMarkupMapper.toTAB(options.reply_markup)
				: undefined,
			stickerFileId: options.sticker_file_id,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.InlineQueryResultCachedSticker>(
			entity,
		);
	}
}
