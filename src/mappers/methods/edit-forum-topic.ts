import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class EditForumTopicMapper {
	static toTelegram(
		options: TgAirBot.EditForumTopic,
	): Telegram.EditForumTopic {
		const entity: Telegram.EditForumTopic = {
			chat_id: options.chatId,
			icon_custom_emoji_id: options.iconCustomEmojiId,
			name: options.name,
			message_thread_id: options.messageThreadId,
		};

		return RemoveUndefinedKeysFromObject<Telegram.EditForumTopic>(entity);
	}
}
