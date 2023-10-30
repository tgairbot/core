import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class HideGeneralForumTopicMapper {
	static toTelegram(
		options: TgAirBot.HideGeneralForumTopic,
	): Telegram.HideGeneralForumTopic {
		const entity: Telegram.HideGeneralForumTopic = {
			chat_id: options.chatId,
		};

		return RemoveUndefinedKeysFromObject<Telegram.HideGeneralForumTopic>(
			entity,
		);
	}
}
