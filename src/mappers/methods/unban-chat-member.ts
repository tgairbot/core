import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class UnbanChatMemberMapper {
	static toTelegram(
		options: TgAirBot.UnbanChatMember,
	): Telegram.UnbanChatMember {
		const entity: Telegram.UnbanChatMember = {
			chat_id: options.chatId,
			user_id: options.userId,
			only_if_banned: options.onlyIfBanned,
		};

		return RemoveUndefinedKeysFromObject<Telegram.UnbanChatMember>(entity);
	}
}
