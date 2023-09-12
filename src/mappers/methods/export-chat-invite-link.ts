import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class ExportChatInviteLinkMapper {
	static toTelegram(
		options: TgAirBot.ExportChatInviteLink,
	): Telegram.ExportChatInviteLink {
		const entity: Telegram.ExportChatInviteLink = {
			chat_id: options.chatId,
		};

		return RemoveUndefinedKeysFromObject<Telegram.ExportChatInviteLink>(
			entity,
		);
	}
}
