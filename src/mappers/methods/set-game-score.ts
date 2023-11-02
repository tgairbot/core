import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class SetGameScoreMapper {
	static toTelegram(options: TgAirBot.SetGameScore): Telegram.SetGameScore {
		const entity: Telegram.SetGameScore = {
			chat_id: options.chatId,
			disable_edit_message: options.disableEditMessage,
			score: options.score,
			inline_message_id: options.inlineMessageId,
			message_id: options.messageId,
			force: options.force,
			user_id: options.userId,
		};

		return RemoveUndefinedKeysFromObject<Telegram.SetGameScore>(entity);
	}
}
