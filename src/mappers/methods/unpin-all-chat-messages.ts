import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class UnpinAllChatMessages {
	static toTelegram(
		options: TgAirBot.UnpinAllChatMessages,
	): Telegram.UnpinAllChatMessages {
		const entity: Telegram.UnpinAllChatMessages = {
			chat_id: options.chatId,
		};

		return RemoveUndefinedKeysFromObject<Telegram.UnpinAllChatMessages>(
			entity,
		);
	}
}
