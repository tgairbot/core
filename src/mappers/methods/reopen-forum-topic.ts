import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class ReopenForumTopicMapper {
	static toTelegram(
		options: TgAirBot.ReopenForumTopic,
	): Telegram.ReopenForumTopic {
		const entity: Telegram.ReopenForumTopic = {
			chat_id: options.chatId,
			message_thread_id: options.messageThreadId,
		};

		return RemoveUndefinedKeysFromObject<Telegram.ReopenForumTopic>(entity);
	}
}
