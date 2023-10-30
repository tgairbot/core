import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class SetChatDescriptionMapper {
	static toTelegram(
		options: TgAirBot.SetChatDescription,
	): Telegram.SetChatDescription {
		const entity: Telegram.SetChatDescription = {
			chat_id: options.chatId,
			description: options.description,
		};

		return RemoveUndefinedKeysFromObject<Telegram.SetChatDescription>(
			entity,
		);
	}
}
