import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class BanChatSenderChatMapper {
	static toTelegram(
		options: TgAirBot.BanChatSenderChat,
	): Telegram.BanChatSenderChat {
		const entity: Telegram.BanChatSenderChat = {
			chat_id: options.chatId,
			sender_chat_id: options.senderChatId,
		};

		return RemoveUndefinedKeysFromObject<Telegram.BanChatSenderChat>(
			entity,
		);
	}
}
