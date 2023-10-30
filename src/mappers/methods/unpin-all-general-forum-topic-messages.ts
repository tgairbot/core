import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class UnpinAllGeneralForumTopicMessagesMapper {
	static toTelegram(
		options: TgAirBot.UnpinAllGeneralForumTopicMessages,
	): Telegram.UnpinAllGeneralForumTopicMessages {
		const entity: Telegram.UnpinAllGeneralForumTopicMessages = {
			chat_id: options.chatId,
		};

		return RemoveUndefinedKeysFromObject<Telegram.UnpinAllGeneralForumTopicMessages>(
			entity,
		);
	}
}
