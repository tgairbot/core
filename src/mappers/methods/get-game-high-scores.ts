import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import * as TgAirBot from "../../types/tgairbot";
import * as Telegram from "../../types/telegram";

export class GetGameHighScoresMapper {
	static toTelegram(
		options: TgAirBot.GetGameHighScores,
	): Telegram.GetGameHighScores {
		const entity: Telegram.GetGameHighScores = {
			chat_id: options.chatId,
			user_id: options.userId,
			message_id: options.messageId,
			inline_message_id: options.inlineMessageId,
		};

		return RemoveUndefinedKeysFromObject<Telegram.GetGameHighScores>(
			entity,
		);
	}
}
