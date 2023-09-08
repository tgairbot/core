import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import { MessageMapper } from "../message";
import { ReplyMarkupMapper } from "../reply-markup";

export class CopyMessageMapper {
	static toTelegram(options: TgAirBot.CopyMessage): Telegram.CopyMessage {
		const entity: Telegram.CopyMessage = {
			from_chat_id: options.fromChatId,
			message_id: options.messageId,
			chat_id: options.chatId,
			message_thread_id: options.messageThreadId,
			protect_content: options.protectContent,
			disable_notification: options.disableNotification,
			allow_sending_without_reply: options.allowSendingWithoutReply,
			reply_to_message_id: options.replyToMessageId,
			parse_mode: options.parseMode,
			caption_entities: options.captionEntities
				? options.captionEntities.map(
						MessageMapper.messageEntityToTelegram,
				  )
				: undefined,
			caption: options.caption,
			reply_markup: options.replyMarkup
				? ReplyMarkupMapper.replyMarkupToTelegram(options.replyMarkup)
				: undefined,
		};

		return RemoveUndefinedKeysFromObject<Telegram.CopyMessage>(entity);
	}
}
