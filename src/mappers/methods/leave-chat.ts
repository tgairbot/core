import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class LeaveChatMapper {
	static toTelegram(options: TgAirBot.LeaveChat): Telegram.LeaveChat {
		const entity: Telegram.LeaveChat = {
			chat_id: options.chatId,
		};

		return RemoveUndefinedKeysFromObject<Telegram.LeaveChat>(entity);
	}
}
