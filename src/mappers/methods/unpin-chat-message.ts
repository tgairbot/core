import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class UnpinChatMessageMapper {
	static toTelegram(
		options: TgAirBot.UnpinChatMessage,
	): Telegram.UnpinChatMessage {
		const entity: Telegram.UnpinChatMessage = {
			chat_id: options.chatId,
			message_id: options.messageId,
		};

		return RemoveUndefinedKeysFromObject<Telegram.UnpinChatMessage>(entity);
	}
}
