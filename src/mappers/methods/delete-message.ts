import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import * as TgAirBot from "../../types/tgairbot";
import * as Telegram from "../../types/telegram";
import { ReplyMarkupMapper } from "../reply-markup";

export class DeleteMessageMapper {
	static toTelegram(options: TgAirBot.DeleteMessage): Telegram.DeleteMessage {
		const entity: Telegram.DeleteMessage = {
			message_id: options.messageId,
			chat_id: options.chatId,
		};

		return RemoveUndefinedKeysFromObject<Telegram.DeleteMessage>(entity);
	}
}
