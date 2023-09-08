import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class SendChatActionMapper {
	static toTelegram(options: TgAirBot.SendChatAtion): Telegram.SendChatAtion {
		const entity: Telegram.SendChatAtion = {
			action: options.action,
			chat_id: options.chatId,
			message_thread_id: options.messageThreadId,
		};

		return RemoveUndefinedKeysFromObject<Telegram.SendChatAtion>(entity);
	}
}
