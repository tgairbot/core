import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class DeleteForumTopicMapper {
	static toTelegram(
		options: TgAirBot.DeleteForumTopic,
	): Telegram.DeleteForumTopic {
		const entity: Telegram.DeleteForumTopic = {
			chat_id: options.chatId,
			message_thread_id: options.messageThreadId,
		};

		return RemoveUndefinedKeysFromObject<Telegram.DeleteForumTopic>(entity);
	}
}
