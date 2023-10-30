import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class CreateForumTopicMapper {
	static toTelegram(
		options: TgAirBot.CreateForumTopic,
	): Telegram.CreateForumTopic {
		const entity: Telegram.CreateForumTopic = {
			chat_id: options.chatId,
			icon_custom_emoji_id: options.iconCustomEmojiId,
			name: options.name,
			icon_color: options.iconColor,
		};

		return RemoveUndefinedKeysFromObject<Telegram.CreateForumTopic>(entity);
	}
}
