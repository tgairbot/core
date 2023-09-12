import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class SetChatTitleMapper {
	static toTelegram(options: TgAirBot.SetChatTitle): Telegram.SetChatTitle {
		const entity: Telegram.SetChatTitle = {
			chat_id: options.chatId,
			title: options.title,
		};

		return RemoveUndefinedKeysFromObject<Telegram.SetChatTitle>(entity);
	}
}
