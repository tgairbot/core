import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import { ReplyMarkupMapper } from "../reply-markup";

export class SendDiceMapper {
	static toTelegram(options: TgAirBot.SendDice): Telegram.SendDice {
		const entity: Telegram.SendDice = {
			chat_id: options.chatId,
			allow_sending_without_reply: options.allowSendingWithoutReply,
			disable_notification: options.disableNotification,
			emoji: options.emoji,
			message_thread_id: options.messageThreadId,
			protect_content: options.protectContent,
			reply_to_message_id: options.replyToMessageId,
			reply_markup: options.replyMarkup
				? ReplyMarkupMapper.replyMarkupToTelegram(options.replyMarkup)
				: undefined,
		};

		return RemoveUndefinedKeysFromObject<Telegram.SendDice>(entity);
	}
}
