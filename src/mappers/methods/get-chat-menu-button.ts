import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class GetChatMenuButtonMapper {
	static toTelegram(
		options: TgAirBot.GetChatMenuButton,
	): Telegram.GetChatMenuButton {
		const entity: Telegram.GetChatMenuButton = {
			chat_id: options.chatId,
		};

		return RemoveUndefinedKeysFromObject<Telegram.GetChatMenuButton>(
			entity,
		);
	}
}
