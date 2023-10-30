import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class PinChatMessageMapper {
	static toTelegram(
		options: TgAirBot.PinChatMessage,
	): Telegram.PinChatMessage {
		const entity: Telegram.PinChatMessage = {
			chat_id: options.chatId,
			message_id: options.messageId,
			disable_notification: options.disableNotification,
		};

		return RemoveUndefinedKeysFromObject<Telegram.PinChatMessage>(entity);
	}
}
