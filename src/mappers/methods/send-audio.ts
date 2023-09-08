import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import { MessageMapper } from "../message";
import { ReplyMarkupMapper } from "../reply-markup";

export class SendAudioMapper {
	static toTelegram(options: TgAirBot.SendAudio): Telegram.SendAudio {
		const entity: Telegram.SendAudio = {
			reply_markup: options.replyMarkup
				? ReplyMarkupMapper.replyMarkupToTelegram(options.replyMarkup)
				: undefined,
			caption: options.caption,
			chat_id: options.chatId,
			message_thread_id: options.messageThreadId,
			parse_mode: options.parseMode,
			protect_content: options.protectContent,
			reply_to_message_id: options.replyToMessageId,
			disable_notification: options.disableNotification,
			allow_sending_without_reply: options.allowSendingWithoutReply,
			caption_entities: options.captionEntities
				? options.captionEntities.map(
						MessageMapper.messageEntityToTelegram,
				  )
				: undefined,
			audio: options.audio,
			thumbnail: options.thumbnail,
			title: options.title,
			duration: options.duration,
			performer: options.performer,
		};

		const parse = RemoveUndefinedKeysFromObject<Telegram.SendAudio>(entity);

		if (typeof options.audio !== "string") {
			parse.audio = options.audio;
		}

		if (options.thumbnail && typeof options.thumbnail !== "string") {
			parse.thumbnail = options.thumbnail;
		}

		return parse;
	}
}
