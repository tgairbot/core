import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class ForwardMessageMapper {
	static toTelegram(
		options: TgAirBot.ForwardMessage,
	): Telegram.ForwardMessage {
		const entity: Telegram.ForwardMessage = {
			disable_notification: options.disableNotification,
			protect_content: options.protectContent,
			message_thread_id: options.messageThreadId,
			chat_id: options.chatId,
			message_id: options.messageId,
			from_chat_id: options.fromChatId,
		};

		return RemoveUndefinedKeysFromObject<Telegram.ForwardMessage>(entity);
	}
}
