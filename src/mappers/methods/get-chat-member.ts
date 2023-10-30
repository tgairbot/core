import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class GetChatMemberMapper {
	static toTelegram(options: TgAirBot.GetChatMember): Telegram.GetChatMember {
		const entity: Telegram.GetChatMember = {
			chat_id: options.chatId,
			user_id: options.userId,
		};

		return RemoveUndefinedKeysFromObject<Telegram.GetChatMember>(entity);
	}
}
