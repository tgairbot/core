import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import { MessageMapper } from "../message";
import { ReplyMarkupMapper } from "../reply-markup";
import { InputMessageContentMapper } from "./input-message-content";

// Voice types
type SelectedVoiceTAB =
	| Telegram.InlineQueryResultVoice
	| Telegram.InlineQueryResultCachedVoice;
type CombineVoiceTAB = Telegram.InlineQueryResultVoice &
	Telegram.InlineQueryResultCachedVoice;
type ConditionalVoiceTAB<
	T extends
		| Telegram.InlineQueryResultVoice
		| Telegram.InlineQueryResultCachedVoice,
> = T extends Telegram.InlineQueryResultVoice
	? TgAirBot.InlineQueryResultVoice
	: TgAirBot.InlineQueryResultCachedVoice;
type TgCombineVoiceTAB = TgAirBot.InlineQueryResultVoice &
	TgAirBot.InlineQueryResultCachedVoice;

type SelectedVoiceTelegram =
	| TgAirBot.InlineQueryResultVoice
	| TgAirBot.InlineQueryResultCachedVoice;
type CombineVoiceTelegram = TgAirBot.InlineQueryResultVoice &
	TgAirBot.InlineQueryResultCachedVoice;
type ConditionalVoiceTelegram<
	T extends
		| TgAirBot.InlineQueryResultVoice
		| TgAirBot.InlineQueryResultCachedVoice,
> = T extends TgAirBot.InlineQueryResultVoice
	? Telegram.InlineQueryResultVoice
	: Telegram.InlineQueryResultCachedVoice;
type TgCombineVoiceTelegram = Telegram.InlineQueryResultVoice &
	Telegram.InlineQueryResultCachedVoice;

// Audio types
type SelectedAudioTAB =
	| Telegram.InlineQueryResultAudio
	| Telegram.InlineQueryResultCachedAudio;
type CombineAudioTAB = Telegram.InlineQueryResultAudio &
	Telegram.InlineQueryResultCachedAudio;
type ConditionalAudioTAB<
	T extends
		| Telegram.InlineQueryResultAudio
		| Telegram.InlineQueryResultCachedAudio,
> = T extends Telegram.InlineQueryResultAudio
	? TgAirBot.InlineQueryResultAudio
	: TgAirBot.InlineQueryResultCachedAudio;
type TgCombineAudioTAB = TgAirBot.InlineQueryResultAudio &
	TgAirBot.InlineQueryResultCachedAudio;

type SelectedAudioTelegram =
	| TgAirBot.InlineQueryResultAudio
	| TgAirBot.InlineQueryResultCachedAudio;
type CombineAudioTelegram = TgAirBot.InlineQueryResultAudio &
	TgAirBot.InlineQueryResultCachedAudio;
type ConditionalAudioTelegram<
	T extends
		| TgAirBot.InlineQueryResultAudio
		| TgAirBot.InlineQueryResultCachedAudio,
> = T extends TgAirBot.InlineQueryResultAudio
	? Telegram.InlineQueryResultAudio
	: Telegram.InlineQueryResultCachedAudio;
type TgCombineAudioTelegram = Telegram.InlineQueryResultAudio &
	Telegram.InlineQueryResultCachedAudio;

// Document types
type SelectedDocumentTAB =
	| Telegram.InlineQueryResultDocument
	| Telegram.InlineQueryResultCachedDocument;
type CombineDocumentTAB = Telegram.InlineQueryResultDocument &
	Telegram.InlineQueryResultCachedDocument;
type ConditionalDocumentTAB<
	T extends
		| Telegram.InlineQueryResultDocument
		| Telegram.InlineQueryResultCachedDocument,
> = T extends Telegram.InlineQueryResultDocument
	? TgAirBot.InlineQueryResultDocument
	: TgAirBot.InlineQueryResultCachedDocument;
type TgCombineDocumentTAB = TgAirBot.InlineQueryResultDocument &
	TgAirBot.InlineQueryResultCachedDocument;

type SelectedDocumentTelegram =
	| TgAirBot.InlineQueryResultDocument
	| TgAirBot.InlineQueryResultCachedDocument;
type CombineDocumentTelegram = TgAirBot.InlineQueryResultDocument &
	TgAirBot.InlineQueryResultCachedDocument;
type ConditionalDocumentTelegram<
	T extends
		| TgAirBot.InlineQueryResultDocument
		| TgAirBot.InlineQueryResultCachedDocument,
> = T extends TgAirBot.InlineQueryResultDocument
	? Telegram.InlineQueryResultDocument
	: Telegram.InlineQueryResultCachedDocument;
type TgCombineDocumentTelegram = Telegram.InlineQueryResultDocument &
	Telegram.InlineQueryResultCachedDocument;

// Gif types
type SelectedGifTAB =
	| Telegram.InlineQueryResultGif
	| Telegram.InlineQueryResultCachedGif;
type CombineGifTAB = Telegram.InlineQueryResultGif &
	Telegram.InlineQueryResultCachedGif;
type ConditionalGifTAB<
	T extends
		| Telegram.InlineQueryResultGif
		| Telegram.InlineQueryResultCachedGif,
> = T extends Telegram.InlineQueryResultGif
	? TgAirBot.InlineQueryResultGif
	: TgAirBot.InlineQueryResultCachedGif;
type TgCombineGifTAB = TgAirBot.InlineQueryResultGif &
	TgAirBot.InlineQueryResultCachedGif;

type SelectedGifTelegram =
	| TgAirBot.InlineQueryResultGif
	| TgAirBot.InlineQueryResultCachedGif;
type CombineGifTelegram = TgAirBot.InlineQueryResultGif &
	TgAirBot.InlineQueryResultCachedGif;
type ConditionalGifTelegram<
	T extends
		| TgAirBot.InlineQueryResultGif
		| TgAirBot.InlineQueryResultCachedGif,
> = T extends TgAirBot.InlineQueryResultGif
	? Telegram.InlineQueryResultGif
	: Telegram.InlineQueryResultCachedGif;
type TgCombineGifTelegram = Telegram.InlineQueryResultGif &
	Telegram.InlineQueryResultCachedGif;

// Video types
type SelectedVideoTAB =
	| Telegram.InlineQueryResultVideo
	| Telegram.InlineQueryResultCachedVideo;
type CombineVideoTAB = Telegram.InlineQueryResultVideo &
	Telegram.InlineQueryResultCachedVideo;
type ConditionalVideoTAB<
	T extends
		| Telegram.InlineQueryResultVideo
		| Telegram.InlineQueryResultCachedVideo,
> = T extends Telegram.InlineQueryResultVideo
	? TgAirBot.InlineQueryResultVideo
	: TgAirBot.InlineQueryResultCachedVideo;
type TgCombineVideoTAB = TgAirBot.InlineQueryResultVideo &
	TgAirBot.InlineQueryResultCachedVideo;

type SelectedVideoTelegram =
	| TgAirBot.InlineQueryResultVideo
	| TgAirBot.InlineQueryResultCachedVideo;
type CombineVideoTelegram = TgAirBot.InlineQueryResultVideo &
	TgAirBot.InlineQueryResultCachedVideo;
type ConditionalVideoTelegram<
	T extends
		| TgAirBot.InlineQueryResultVideo
		| TgAirBot.InlineQueryResultCachedVideo,
> = T extends TgAirBot.InlineQueryResultVideo
	? Telegram.InlineQueryResultVideo
	: Telegram.InlineQueryResultCachedVideo;
type TgCombineVideoTelegram = Telegram.InlineQueryResultVideo &
	Telegram.InlineQueryResultCachedVideo;

// Photo types
type SelectedPhotoTAB =
	| Telegram.InlineQueryResultPhoto
	| Telegram.InlineQueryResultCachedPhoto;
type CombinePhotoTAB = Telegram.InlineQueryResultPhoto &
	Telegram.InlineQueryResultCachedPhoto;
type ConditionalPhotoTAB<
	T extends
		| Telegram.InlineQueryResultPhoto
		| Telegram.InlineQueryResultCachedPhoto,
> = T extends Telegram.InlineQueryResultPhoto
	? TgAirBot.InlineQueryResultPhoto
	: TgAirBot.InlineQueryResultCachedPhoto;
type TgCombinePhotoTAB = TgAirBot.InlineQueryResultPhoto &
	TgAirBot.InlineQueryResultCachedPhoto;

type SelectedPhotoTelegram =
	| TgAirBot.InlineQueryResultPhoto
	| TgAirBot.InlineQueryResultCachedPhoto;
type CombinePhotoTelegram = TgAirBot.InlineQueryResultPhoto &
	TgAirBot.InlineQueryResultCachedPhoto;
type ConditionalPhotoTelegram<
	T extends
		| TgAirBot.InlineQueryResultPhoto
		| TgAirBot.InlineQueryResultCachedPhoto,
> = T extends TgAirBot.InlineQueryResultPhoto
	? Telegram.InlineQueryResultPhoto
	: Telegram.InlineQueryResultCachedPhoto;
type TgCombinePhotoTelegram = Telegram.InlineQueryResultPhoto &
	Telegram.InlineQueryResultCachedPhoto;

// Mpeg4Gif types
type SelectedMpeg4GifTAB =
	| Telegram.InlineQueryResultMpeg4Gif
	| Telegram.InlineQueryResultCachedMpeg4Gif;
type CombineMpeg4GifTAB = Telegram.InlineQueryResultMpeg4Gif &
	Telegram.InlineQueryResultCachedMpeg4Gif;
type ConditionalMpeg4GifTAB<
	T extends
		| Telegram.InlineQueryResultMpeg4Gif
		| Telegram.InlineQueryResultCachedMpeg4Gif,
> = T extends Telegram.InlineQueryResultMpeg4Gif
	? TgAirBot.InlineQueryResultMpeg4Gif
	: TgAirBot.InlineQueryResultCachedMpeg4Gif;
type TgCombineMpeg4GifTAB = TgAirBot.InlineQueryResultMpeg4Gif &
	TgAirBot.InlineQueryResultCachedMpeg4Gif;

type SelectedMpeg4GifTelegram =
	| TgAirBot.InlineQueryResultMpeg4Gif
	| TgAirBot.InlineQueryResultCachedMpeg4Gif;
type CombineMpeg4GifTelegram = TgAirBot.InlineQueryResultMpeg4Gif &
	TgAirBot.InlineQueryResultCachedMpeg4Gif;
type ConditionalMpeg4GifTelegram<
	T extends
		| TgAirBot.InlineQueryResultMpeg4Gif
		| TgAirBot.InlineQueryResultCachedMpeg4Gif,
> = T extends TgAirBot.InlineQueryResultMpeg4Gif
	? Telegram.InlineQueryResultMpeg4Gif
	: Telegram.InlineQueryResultCachedMpeg4Gif;
type TgCombineMpeg4GifTelegram = Telegram.InlineQueryResultMpeg4Gif &
	Telegram.InlineQueryResultCachedMpeg4Gif;

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

	static toTelegram(
		options: TgAirBot.InlineQueryResult,
	): Telegram.InlineQueryResult {
		switch (options.type) {
			case "audio":
				return InlineQueryResultMapper.inlineQueryResultAudioToTelegram(
					options,
				);
			case "document":
				return InlineQueryResultMapper.inlineQueryResultDocumentToTelegram(
					options,
				);
			case "gif":
				return InlineQueryResultMapper.inlineQueryResultGifToTelegram(
					options,
				);
			case "mpeg4_gif":
				return InlineQueryResultMapper.inlineQueryResultMpeg4GifToTelegram(
					options,
				);
			case "photo":
				return InlineQueryResultMapper.inlineQueryResultPhotoToTelegram(
					options,
				);
			case "sticker":
				return InlineQueryResultMapper.inlineQueryResultStickerToTelegram(
					options,
				);
			case "video":
				return InlineQueryResultMapper.inlineQueryResultVideoToTelegram(
					options,
				);
			case "voice":
				return InlineQueryResultMapper.inlineQueryResultVoiceToTelegram(
					options,
				);
			case "article":
				return InlineQueryResultMapper.inlineQueryResultArticleToTelegram(
					options,
				);
			case "contact":
				return InlineQueryResultMapper.inlineQueryResultContactToTelegram(
					options,
				);
			case "game":
				return InlineQueryResultMapper.inlineQueryResultGameToTelegram(
					options,
				);
			case "location":
				return InlineQueryResultMapper.inlineQueryResultLocationToTelegram(
					options,
				);
			case "venue":
				return InlineQueryResultMapper.inlineQueryResultVenueToTelegram(
					options,
				);
		}
	}

	static inlineQueryResultVoiceToTAB<T extends SelectedVoiceTAB>(
		options: T,
	): ConditionalVoiceTAB<T> {
		const params = options as CombineVoiceTAB;

		const entity: TgCombineVoiceTAB = {
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

		return RemoveUndefinedKeysFromObject<TgCombineVoiceTAB>(
			entity,
		) as ConditionalVoiceTAB<T>;
	}

	static inlineQueryResultVoiceToTelegram<T extends SelectedVoiceTelegram>(
		options: T,
	): ConditionalVoiceTelegram<T> {
		const params = options as CombineVoiceTelegram;

		const entity: TgCombineVoiceTelegram = {
			id: params.id,
			title: params.title,
			type: params.type,
			voice_url: params.voiceUrl,
			caption: params.caption,
			caption_entities: params.captionEntities
				? params.captionEntities.map(
						MessageMapper.messageEntityToTelegram,
				  )
				: undefined,
			parse_mode: params.parseMode,
			reply_markup: params.replyMarkup
				? ReplyMarkupMapper.toTelegram(params.replyMarkup)
				: undefined,
			voice_duration: params.voiceDuration,
			input_message_content: params.inputMessageContent
				? InputMessageContentMapper.toTelegram(
						params.inputMessageContent,
				  )
				: undefined,
			description: params.description,
			voice_file_id: params.voiceFileId,
		};

		return RemoveUndefinedKeysFromObject<TgCombineVoiceTelegram>(
			entity,
		) as ConditionalVoiceTelegram<T>;
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

	static inlineQueryResultArticleToTelegram(
		options: TgAirBot.InlineQueryResultArticle,
	): Telegram.InlineQueryResultArticle {
		const entity: Telegram.InlineQueryResultArticle = {
			id: options.id,
			input_message_content: InputMessageContentMapper.toTelegram(
				options.inputMessageContent,
			),
			title: options.title,
			type: options.type,
			description: options.description,
			hide_url: options.hideUrl,
			reply_markup: options.replyMarkup
				? ReplyMarkupMapper.toTelegram(options.replyMarkup)
				: undefined,
			thumbnail_height: options.thumbnailHeight,
			thumbnail_url: options.thumbnailUrl,
			thumbnail_width: options.thumbnailWidth,
			url: options.url,
		};

		return RemoveUndefinedKeysFromObject<Telegram.InlineQueryResultArticle>(
			entity,
		);
	}

	static inlineQueryResultAudioToTAB<T extends SelectedAudioTAB>(
		options: T,
	): ConditionalAudioTAB<T> {
		const params = options as CombineAudioTAB;

		const entity: TgCombineAudioTAB = {
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
			audioFileId: params.audio_file_id,
		};

		return RemoveUndefinedKeysFromObject<TgCombineAudioTAB>(
			entity,
		) as ConditionalAudioTAB<T>;
	}

	static inlineQueryResultAudioToTelegram<T extends SelectedAudioTelegram>(
		options: T,
	): ConditionalAudioTelegram<T> {
		const params = options as CombineAudioTelegram;

		const entity: TgCombineAudioTelegram = {
			id: params.id,
			audio_url: params.audioUrl,
			title: params.title,
			type: params.type,
			audio_duration: params.audioDuration,
			caption: params.caption,
			caption_entities: params.captionEntities
				? params.captionEntities.map(
						MessageMapper.messageEntityToTelegram,
				  )
				: undefined,
			input_message_content: params.inputMessageContent
				? InputMessageContentMapper.toTelegram(
						params.inputMessageContent,
				  )
				: undefined,
			parse_mode: params.parseMode,
			performer: params.performer,
			reply_markup: params.replyMarkup
				? ReplyMarkupMapper.toTelegram(params.replyMarkup)
				: undefined,
			audio_file_id: params.audioFileId,
		};

		return RemoveUndefinedKeysFromObject<TgCombineAudioTelegram>(
			entity,
		) as ConditionalAudioTelegram<T>;
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

	static inlineQueryResultContactToTelegram(
		options: TgAirBot.InlineQueryResultContact,
	): Telegram.InlineQueryResultContact {
		const entity: Telegram.InlineQueryResultContact = {
			first_name: options.firstName,
			last_name: options.lastName,
			id: options.id,
			phone_number: options.phoneNumber,
			type: options.type,
			input_message_content: options.inputMessageContent
				? InputMessageContentMapper.toTelegram(
						options.inputMessageContent,
				  )
				: undefined,
			reply_markup: options.replyMarkup
				? ReplyMarkupMapper.toTelegram(options.replyMarkup)
				: undefined,
			vcard: options.vcard,
			thumbnail_height: options.thumbnailHeight,
			thumbnail_width: options.thumbnailWidth,
			thumbnail_url: options.thumbnailUrl,
		};

		return RemoveUndefinedKeysFromObject<Telegram.InlineQueryResultContact>(
			entity,
		);
	}

	static inlineQueryResultDocumentToTAB<T extends SelectedDocumentTAB>(
		options: T,
	): ConditionalDocumentTAB<T> {
		const params = options as CombineDocumentTAB;

		const entity: TgCombineDocumentTAB = {
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

		return RemoveUndefinedKeysFromObject<TgCombineDocumentTAB>(
			entity,
		) as ConditionalDocumentTAB<T>;
	}

	static inlineQueryResultDocumentToTelegram<
		T extends SelectedDocumentTelegram,
	>(options: T): ConditionalDocumentTelegram<T> {
		const params = options as CombineDocumentTelegram;

		const entity: TgCombineDocumentTelegram = {
			document_file_id: params.documentFileId,
			id: params.id,
			mime_type: params.mimeType,
			title: params.title,
			type: params.type,
			caption: params.caption,
			caption_entities: params.captionEntities
				? params.captionEntities.map(
						MessageMapper.messageEntityToTelegram,
				  )
				: undefined,
			description: params.description,
			input_message_content: params.inputMessageContent
				? InputMessageContentMapper.toTelegram(
						params.inputMessageContent,
				  )
				: undefined,
			parse_mode: params.parseMode,
			reply_markup: params.replyMarkup
				? ReplyMarkupMapper.toTelegram(params.replyMarkup)
				: undefined,
			document_url: params.documentUrl,
			thumbnail_height: params.thumbnailHeight,
			thumbnail_url: params.thumbnailUrl,
			thumbnail_width: params.thumbnailWidth,
		};

		return RemoveUndefinedKeysFromObject<TgCombineDocumentTelegram>(
			entity,
		) as ConditionalDocumentTelegram<T>;
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

	static inlineQueryResultGameToTelegram(
		options: TgAirBot.InlineQueryResultGame,
	): Telegram.InlineQueryResultGame {
		const entity: Telegram.InlineQueryResultGame = {
			game_short_name: options.gameShortName,
			id: options.id,
			type: options.type,
			reply_markup: options.replyMarkup
				? ReplyMarkupMapper.toTelegram(options.replyMarkup)
				: undefined,
		};

		return RemoveUndefinedKeysFromObject<Telegram.InlineQueryResultGame>(
			entity,
		);
	}

	static inlineQueryResultGifToTAB<T extends SelectedGifTAB>(
		options: T,
	): ConditionalGifTAB<T> {
		const params = options as CombineGifTAB;

		const entity: TgCombineGifTAB = {
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

		return RemoveUndefinedKeysFromObject<TgCombineGifTAB>(
			entity,
		) as ConditionalGifTAB<T>;
	}

	static inlineQueryResultGifToTelegram<T extends SelectedGifTelegram>(
		options: T,
	): ConditionalGifTelegram<T> {
		const params = options as CombineGifTelegram;

		const entity: TgCombineGifTelegram = {
			gif_url: params.gifUrl,
			id: params.id,
			thumbnail_url: params.thumbnailUrl,
			type: params.type,
			caption: params.caption,
			caption_entities: params.captionEntities
				? params.captionEntities.map(
						MessageMapper.messageEntityToTelegram,
				  )
				: undefined,
			gif_duration: params.gifDuration,
			gif_width: params.gifWidth,
			gif_height: params.gifHeight,
			input_message_content: params.inputMessageContent
				? InputMessageContentMapper.toTelegram(
						params.inputMessageContent,
				  )
				: undefined,
			parse_mode: params.parseMode,
			reply_markup: params.replyMarkup
				? ReplyMarkupMapper.toTelegram(params.replyMarkup)
				: undefined,
			thumbnail_mime_type: params.thumbnailMimeType,
			title: params.title,
			gif_file_id: params.gifFileId,
		};

		return RemoveUndefinedKeysFromObject<TgCombineGifTelegram>(
			entity,
		) as ConditionalGifTelegram<T>;
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

	static inlineQueryResultLocationToTelegram(
		options: TgAirBot.InlineQueryResultLocation,
	): Telegram.InlineQueryResultLocation {
		const entity: Telegram.InlineQueryResultLocation = {
			id: options.id,
			latitude: options.latitude,
			longitude: options.longitude,
			title: options.title,
			type: options.type,
			heading: options.heading,
			input_message_content: options.inputMessageContent
				? InputMessageContentMapper.toTelegram(
						options.inputMessageContent,
				  )
				: undefined,
			live_period: options.livePeriod,
			proximity_alert_radius: options.proximityAlertRadius,
			reply_markup: options.replyMarkup
				? ReplyMarkupMapper.toTelegram(options.replyMarkup)
				: undefined,
			thumbnail_height: options.thumbnailHeight,
			thumbnail_width: options.thumbnailWidth,
			thumbnail_url: options.thumbnailUrl,
			horizontal_accuracy: options.horizontalAccuracy,
		};

		return RemoveUndefinedKeysFromObject<Telegram.InlineQueryResultLocation>(
			entity,
		);
	}

	static inlineQueryResultMpeg4GifToTAB<T extends SelectedMpeg4GifTAB>(
		options: T,
	): ConditionalMpeg4GifTAB<T> {
		const params = options as CombineMpeg4GifTAB;

		const entity: TgCombineMpeg4GifTAB = {
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

		return RemoveUndefinedKeysFromObject<TgCombineMpeg4GifTAB>(
			entity,
		) as ConditionalMpeg4GifTAB<T>;
	}

	static inlineQueryResultMpeg4GifToTelegram<
		T extends SelectedMpeg4GifTelegram,
	>(options: T): ConditionalMpeg4GifTelegram<T> {
		const params = options as CombineMpeg4GifTelegram;

		const entity: TgCombineMpeg4GifTelegram = {
			id: params.id,
			mpeg4_url: params.mpeg4Url,
			thumbnail_url: params.thumbnailUrl,
			type: params.type,
			caption: params.caption,
			caption_entities: params.captionEntities
				? params.captionEntities.map(
						MessageMapper.messageEntityToTelegram,
				  )
				: undefined,
			input_message_content: params.inputMessageContent
				? InputMessageContentMapper.toTelegram(
						params.inputMessageContent,
				  )
				: undefined,
			reply_markup: params.replyMarkup
				? ReplyMarkupMapper.toTelegram(params.replyMarkup)
				: undefined,
			mpeg4_duration: params.mpeg4Duration,
			title: params.title,
			mpeg4_file_id: params.mpeg4FileId,
			mpeg4_height: params.mpeg4Height,
			parse_mode: params.parseMode,
			mpeg4_width: params.mpeg4Width,
			thumbnail_mime_type: params.thumbnailMimeType,
		};

		return RemoveUndefinedKeysFromObject<TgCombineMpeg4GifTelegram>(
			entity,
		) as ConditionalMpeg4GifTelegram<T>;
	}

	static inlineQueryResultPhotoToTAB<T extends SelectedPhotoTAB>(
		options: T,
	): ConditionalPhotoTAB<T> {
		const params = options as CombinePhotoTAB;

		const entity: TgCombinePhotoTAB = {
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

		return RemoveUndefinedKeysFromObject<TgCombinePhotoTAB>(
			entity,
		) as ConditionalPhotoTAB<T>;
	}

	static inlineQueryResultPhotoToTelegram<T extends SelectedPhotoTelegram>(
		options: T,
	): ConditionalPhotoTelegram<T> {
		const params = options as CombinePhotoTelegram;

		const entity: TgCombinePhotoTelegram = {
			id: params.id,
			photo_url: params.photoUrl,
			thumbnail_url: params.thumbnailUrl,
			type: params.type,
			caption: params.caption,
			caption_entities: params.captionEntities
				? params.captionEntities.map(
						MessageMapper.messageEntityToTelegram,
				  )
				: undefined,
			input_message_content: params.inputMessageContent
				? InputMessageContentMapper.toTelegram(
						params.inputMessageContent,
				  )
				: undefined,
			reply_markup: params.replyMarkup
				? ReplyMarkupMapper.toTelegram(params.replyMarkup)
				: undefined,
			description: params.description,
			title: params.title,
			photo_height: params.photoHeight,
			photo_width: params.photoWidth,
			parse_mode: params.parseMode,
			photo_file_id: params.photoFileId,
		};

		return RemoveUndefinedKeysFromObject<TgCombinePhotoTelegram>(
			entity,
		) as ConditionalPhotoTelegram<T>;
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

	static inlineQueryResultVenueToTelegram(
		options: TgAirBot.InlineQueryResultVenue,
	): Telegram.InlineQueryResultVenue {
		const entity: Telegram.InlineQueryResultVenue = {
			address: options.address,
			id: options.id,
			latitude: options.latitude,
			longitude: options.longitude,
			title: options.title,
			type: options.type,
			input_message_content: options.inputMessageContent
				? InputMessageContentMapper.toTelegram(
						options.inputMessageContent,
				  )
				: undefined,
			reply_markup: options.replyMarkup
				? ReplyMarkupMapper.toTelegram(options.replyMarkup)
				: undefined,
			foursquare_id: options.foursquareId,
			foursquare_type: options.foursquareType,
			google_place_id: options.googlePlaceId,
			thumbnail_url: options.thumbnailUrl,
			google_place_type: options.googlePlaceType,
			thumbnail_height: options.thumbnailHeight,
			thumbnail_width: options.thumbnailWidth,
		};

		return RemoveUndefinedKeysFromObject<Telegram.InlineQueryResultVenue>(
			entity,
		);
	}

	static inlineQueryResultVideoToTAB<T extends SelectedVideoTAB>(
		options: T,
	): ConditionalVideoTAB<T> {
		const params = options as CombineVideoTAB;

		const entity: TgCombineVideoTAB = {
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

		return RemoveUndefinedKeysFromObject<TgCombineVideoTAB>(
			entity,
		) as ConditionalVideoTAB<T>;
	}

	static inlineQueryResultVideoToTelegram<T extends SelectedVideoTelegram>(
		options: T,
	): ConditionalVideoTelegram<T> {
		const params = options as CombineVideoTelegram;

		const entity: TgCombineVideoTelegram = {
			id: params.id,
			title: params.title,
			type: params.type,
			input_message_content: params.inputMessageContent
				? InputMessageContentMapper.toTelegram(
						params.inputMessageContent,
				  )
				: undefined,
			reply_markup: params.replyMarkup
				? ReplyMarkupMapper.toTelegram(params.replyMarkup)
				: undefined,
			mime_type: params.mimeType,
			parse_mode: params.parseMode,
			caption: params.caption,
			caption_entities: params.captionEntities
				? params.captionEntities.map(
						MessageMapper.messageEntityToTelegram,
				  )
				: undefined,
			description: params.description,
			thumbnail_url: params.thumbnailUrl,
			video_duration: params.videoDuration,
			video_file_id: params.videoFileId,
			video_height: params.videoHeight,
			video_url: params.videoUrl,
			video_width: params.videoWidth,
		};

		return RemoveUndefinedKeysFromObject<TgCombineVideoTelegram>(
			entity,
		) as ConditionalVideoTelegram<T>;
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

	static inlineQueryResultStickerToTelegram(
		options: TgAirBot.InlineQueryResultCachedSticker,
	): Telegram.InlineQueryResultCachedSticker {
		const entity: Telegram.InlineQueryResultCachedSticker = {
			id: options.id,
			type: options.type,
			input_message_content: options.inputMessageContent
				? InputMessageContentMapper.toTelegram(
						options.inputMessageContent,
				  )
				: undefined,
			reply_markup: options.replyMarkup
				? ReplyMarkupMapper.toTelegram(options.replyMarkup)
				: undefined,
			sticker_file_id: options.stickerFileId,
		};

		return RemoveUndefinedKeysFromObject<Telegram.InlineQueryResultCachedSticker>(
			entity,
		);
	}
}
