import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class UnpinAllForumTopicMessagesMapper {
	static toTelegram(
		options: TgAirBot.UnpinAllForumTopicMessages,
	): Telegram.UnpinAllForumTopicMessages {
		const entity: Telegram.UnpinAllForumTopicMessages = {
			chat_id: options.chatId,
			message_thread_id: options.messageThreadId,
		};

		return RemoveUndefinedKeysFromObject<Telegram.UnpinAllForumTopicMessages>(
			entity,
		);
	}
}
