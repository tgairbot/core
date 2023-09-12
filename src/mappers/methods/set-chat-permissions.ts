import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { ChatMapper } from "../chat";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class SetChatPermissionsMapper {
	static toTelegram(
		options: TgAirBot.SetChatPermissions,
	): Telegram.SetChatPermissions {
		const entity: Telegram.SetChatPermissions = {
			chat_id: options.chatId,
			permissions: ChatMapper.permissionsToTelegram(options.permissions),
			use_independent_chat_permissions:
				options.useIndependentChatPermissions,
		};

		return RemoveUndefinedKeysFromObject<Telegram.SetChatPermissions>(
			entity,
		);
	}
}
