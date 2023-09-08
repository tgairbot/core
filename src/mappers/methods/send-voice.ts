import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import { MessageMapper } from "../message";
import { ReplyMarkupMapper } from "../reply-markup";

export class SendVoiceMapper {
	static toTelegram(options: TgAirBot.SendVoice): Telegram.SendVoice {
		const entity: Telegram.SendVoice = {
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
			voice: options.voice,
			duration: options.duration,
		};

		const parse = RemoveUndefinedKeysFromObject<Telegram.SendVoice>(entity);

		if (typeof options.voice !== "string") {
			parse.voice = options.voice;
		}

		return parse;
	}
}
