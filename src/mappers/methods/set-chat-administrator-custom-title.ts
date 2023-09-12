import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class SetChatAdministratorCustomTitleMapper {
	static toTelegram(
		options: TgAirBot.SetChatAdministratorCustomTitle,
	): Telegram.SetChatAdministratorCustomTitle {
		const entity: Telegram.SetChatAdministratorCustomTitle = {
			chat_id: options.chatId,
			user_id: options.userId,
			custom_title: options.customTitle,
		};

		return RemoveUndefinedKeysFromObject<Telegram.SetChatAdministratorCustomTitle>(
			entity,
		);
	}
}
