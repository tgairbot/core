import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import { ReplyMarkupMapper } from "../reply-markup";

export class SendContactMapper {
	static toTelegram(options: TgAirBot.SendContact): Telegram.SendContact {
		const entity: Telegram.SendContact = {
			chat_id: options.chatId,
			first_name: options.firstName,
			last_name: options.lastName,
			phone_number: options.phoneNumber,
			allow_sending_without_reply: options.allowSendingWithoutReply,
			disable_notification: options.disableNotification,
			message_thread_id: options.messageThreadId,
			protect_content: options.protectContent,
			reply_to_message_id: options.replyToMessageId,
			reply_markup: options.replyMarkup
				? ReplyMarkupMapper.replyMarkupToTelegram(options.replyMarkup)
				: undefined,
			vcard: options.vcard,
		};

		return RemoveUndefinedKeysFromObject<Telegram.SendContact>(entity);
	}
}
