import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class UnbanChatSenderChatMapper {
	static toTelegram(
		options: TgAirBot.UnbanChatSenderChat,
	): Telegram.UnbanChatSenderChat {
		const entity: Telegram.UnbanChatSenderChat = {
			chat_id: options.chatId,
			sender_chat_id: options.senderChatId,
		};

		return RemoveUndefinedKeysFromObject<Telegram.UnbanChatSenderChat>(
			entity,
		);
	}
}
