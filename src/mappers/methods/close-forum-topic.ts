import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class CloseForumTopicMapper {
	static toTelegram(
		options: TgAirBot.CloseForumTopic,
	): Telegram.CloseForumTopic {
		const entity: Telegram.CloseForumTopic = {
			chat_id: options.chatId,
			message_thread_id: options.messageThreadId,
		};

		return RemoveUndefinedKeysFromObject<Telegram.CloseForumTopic>(entity);
	}
}
