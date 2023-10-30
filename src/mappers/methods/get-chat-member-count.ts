import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class GetChatMemberCountMapper {
	static toTelegram(
		options: TgAirBot.GetChatMemberCount,
	): Telegram.GetChatMemberCount {
		const entity: Telegram.GetChatMemberCount = {
			chat_id: options.chatId,
		};

		return RemoveUndefinedKeysFromObject<Telegram.GetChatMemberCount>(
			entity,
		);
	}
}
