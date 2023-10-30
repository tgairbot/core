import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class ReopenGeneralForumTopicMapper {
	static toTelegram(
		options: TgAirBot.ReopenGeneralForumTopic,
	): Telegram.ReopenGeneralForumTopic {
		const entity: Telegram.ReopenGeneralForumTopic = {
			chat_id: options.chatId,
		};

		return RemoveUndefinedKeysFromObject<Telegram.ReopenGeneralForumTopic>(
			entity,
		);
	}
}
