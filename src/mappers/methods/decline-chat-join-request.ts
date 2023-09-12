import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class DeclineChatJoinRequestMapper {
	static toTelegram(
		options: TgAirBot.DeclineChatJoinRequest,
	): Telegram.DeclineChatJoinRequest {
		const entity: Telegram.DeclineChatJoinRequest = {
			chat_id: options.chatId,
			user_id: options.userId,
		};

		return RemoveUndefinedKeysFromObject<Telegram.DeclineChatJoinRequest>(
			entity,
		);
	}
}
