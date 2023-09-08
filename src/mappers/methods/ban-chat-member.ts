import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class BanChatMemberMapper {
	static toTelegram(options: TgAirBot.BanChatMember): Telegram.BanChatMember {
		const entity: Telegram.BanChatMember = {
			user_id: options.userId,
			chat_id: options.chatId,
			revoke_messages: options.revokeMessages,
			until_date: options.untilDate,
		};

		return RemoveUndefinedKeysFromObject<Telegram.BanChatMember>(entity);
	}
}
