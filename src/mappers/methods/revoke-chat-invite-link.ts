import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class RevokeChatInviteLinkMapper {
	static toTelegram(
		options: TgAirBot.RevokeChatInviteLink,
	): Telegram.RevokeChatInviteLink {
		const entity: Telegram.RevokeChatInviteLink = {
			chat_id: options.chatId,
			invite_link: options.inviteLink,
		};

		return RemoveUndefinedKeysFromObject<Telegram.RevokeChatInviteLink>(
			entity,
		);
	}
}
