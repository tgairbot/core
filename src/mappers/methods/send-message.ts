import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import { MessageMapper } from "../message";
import { ReplyMarkupMapper } from "../reply-markup";

export class SendMessageMapper {
	static toTelegram(options: TgAirBot.SendMessage): Telegram.SendMessage {
		const entity: Telegram.SendMessage = {
			reply_markup: options.replyMarkup
				? ReplyMarkupMapper.replyMarkupToTelegram(options.replyMarkup)
				: undefined,
			text: options.text,
			chat_id: options.chatId,
			message_thread_id: options.messageThreadId,
			parse_mode: options.parseMode,
			protect_content: options.protectContent,
			reply_to_message_id: options.replyToMessageId,
			disable_notification: options.disableNotification,
			disable_web_page_preview: options.disableWebPagePreview,
			allow_sending_without_reply: options.allowSendingWithoutReply,
			entities: options.entities
				? options.entities.map(MessageMapper.messageEntityToTelegram)
				: undefined,
		};

		return RemoveUndefinedKeysFromObject<Telegram.SendMessage>(entity);
	}
}
