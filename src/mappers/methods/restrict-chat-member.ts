import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { ChatMapper } from "../chat";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class RestrictChatMemberMapper {
	static toTelegram(
		options: TgAirBot.RestrictChatMember,
	): Telegram.RestrictChatMember {
		const entity: Telegram.RestrictChatMember = {
			chat_id: options.chatId,
			permissions: ChatMapper.permissionsToTelegram(options.permissions),
			until_date: options.untilDate,
			user_id: options.userId,
			use_independent_chat_permissions:
				options.useIndependentChatPermissions,
		};

		return RemoveUndefinedKeysFromObject<Telegram.RestrictChatMember>(
			entity,
		);
	}
}
