import * as Telegram from "../types/telegram";
import * as TgAirBot from "../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../utils/remove-undefined-keys-from-object";
import { MessageMapper } from "./message";

export class InputMapper {
	static groupToTelegram(
		input:
			| TgAirBot.InputMediaAudio
			| TgAirBot.InputMediaDocument
			| TgAirBot.InputMediaPhoto
			| TgAirBot.InputMediaVideo,
	):
		| Telegram.InputMediaAudio
		| Telegram.InputMediaDocument
		| Telegram.InputMediaPhoto
		| Telegram.InputMediaVideo {
		switch (input.type) {
			case "audio":
				return InputMapper.audioToTelegram(input);
			case "document":
				return InputMapper.documentToTelegram(input);
			case "photo":
				return InputMapper.photoToTelegram(input);
			case "video":
				return InputMapper.videoToTelegram(input);
		}
	}

	static audioToTelegram(
		input: TgAirBot.InputMediaAudio,
	): Telegram.InputMediaAudio {
		const entity: Telegram.InputMediaAudio = {
			type: input.type,
			thumbnail: input.thumbnail,
			duration: input.duration,
			performer: input.performer,
			title: input.title,
			caption_entities: input.captionEntities
				? input.captionEntities.map(
						MessageMapper.messageEntityToTelegram,
				  )
				: undefined,
			caption: input.caption,
			media: input.media,
			parse_mode: input.parseMode,
		};

		if (typeof input.thumbnail !== "string") {
			entity.thumbnail = input.thumbnail;
		}

		return RemoveUndefinedKeysFromObject<Telegram.InputMediaAudio>(entity);
	}

	static documentToTelegram(
		input: TgAirBot.InputMediaDocument,
	): Telegram.InputMediaDocument {
		const entity: Telegram.InputMediaDocument = {
			type: input.type,
			thumbnail: input.thumbnail,
			caption_entities: input.captionEntities
				? input.captionEntities.map(
						MessageMapper.messageEntityToTelegram,
				  )
				: undefined,
			caption: input.caption,
			media: input.media,
			parse_mode: input.parseMode,
			disable_content_type_detection: input.disableContentTypeDetection,
		};

		if (typeof input.thumbnail !== "string") {
			entity.thumbnail = input.thumbnail;
		}

		return RemoveUndefinedKeysFromObject<Telegram.InputMediaDocument>(
			entity,
		);
	}

	static photoToTelegram(
		input: TgAirBot.InputMediaPhoto,
	): Telegram.InputMediaPhoto {
		const entity: Telegram.InputMediaPhoto = {
			type: input.type,
			caption_entities: input.captionEntities
				? input.captionEntities.map(
						MessageMapper.messageEntityToTelegram,
				  )
				: undefined,
			caption: input.caption,
			media: input.media,
			parse_mode: input.parseMode,
			has_spoiler: input.hasSpoiler,
		};

		return RemoveUndefinedKeysFromObject<Telegram.InputMediaPhoto>(entity);
	}

	static videoToTelegram(
		input: TgAirBot.InputMediaVideo,
	): Telegram.InputMediaVideo {
		const entity: Telegram.InputMediaVideo = {
			type: input.type,
			thumbnail: input.thumbnail,
			caption_entities: input.captionEntities
				? input.captionEntities.map(
						MessageMapper.messageEntityToTelegram,
				  )
				: undefined,
			caption: input.caption,
			media: input.media,
			parse_mode: input.parseMode,
			duration: input.duration,
			supports_streaming: input.supportsStreaming,
			height: input.height,
			width: input.width,
			has_spoiler: input.hasSpoiler,
		};

		if (typeof input.thumbnail !== "string") {
			entity.thumbnail = input.thumbnail;
		}

		return RemoveUndefinedKeysFromObject<Telegram.InputMediaVideo>(entity);
	}
}
