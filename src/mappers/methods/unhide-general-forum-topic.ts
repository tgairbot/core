import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class UnhideGeneralForumTopicMapper {
	static toTelegram(
		options: TgAirBot.UnhideGeneralForumTopic,
	): Telegram.UnhideGeneralForumTopic {
		const entity: Telegram.UnhideGeneralForumTopic = {
			chat_id: options.chatId,
		};

		return RemoveUndefinedKeysFromObject<Telegram.UnhideGeneralForumTopic>(
			entity,
		);
	}
}
