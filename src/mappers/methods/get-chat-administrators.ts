import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class GetChatAdministratorsMapper {
	static toTelegram(
		options: TgAirBot.GetChatAdministrators,
	): Telegram.GetChatAdministrators {
		const entity: Telegram.GetChatAdministrators = {
			chat_id: options.chatId,
		};

		return RemoveUndefinedKeysFromObject<Telegram.GetChatAdministrators>(
			entity,
		);
	}
}
