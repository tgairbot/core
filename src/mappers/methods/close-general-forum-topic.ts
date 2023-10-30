import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class CloseGeneralForumTopicMapper {
	static toTelegram(
		options: TgAirBot.CloseGeneralForumTopic,
	): Telegram.CloseGeneralForumTopic {
		const entity: Telegram.CloseGeneralForumTopic = {
			chat_id: options.chatId,
		};

		return RemoveUndefinedKeysFromObject<Telegram.CloseGeneralForumTopic>(
			entity,
		);
	}
}
