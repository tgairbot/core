import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class ApproveChatJoinRequestMapper {
	static toTelegram(
		options: TgAirBot.ApproveChatJoinRequest,
	): Telegram.ApproveChatJoinRequest {
		const entity: Telegram.ApproveChatJoinRequest = {
			chat_id: options.chatId,
			user_id: options.userId,
		};

		return RemoveUndefinedKeysFromObject<Telegram.ApproveChatJoinRequest>(
			entity,
		);
	}
}
