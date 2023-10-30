import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class EditGeneralForumTopicMapper {
	static toTelegram(
		options: TgAirBot.EditGeneralForumTopic,
	): Telegram.EditGeneralForumTopic {
		const entity: Telegram.EditGeneralForumTopic = {
			chat_id: options.chatId,
			name: options.name,
		};

		return RemoveUndefinedKeysFromObject<Telegram.EditGeneralForumTopic>(
			entity,
		);
	}
}
