import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class GetChatMapper {
	static toTelegram(options: TgAirBot.GetChat): Telegram.GetChat {
		const entity: Telegram.GetChat = {
			chat_id: options.chatId,
		};

		return RemoveUndefinedKeysFromObject<Telegram.GetChat>(entity);
	}
}
