import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class EditChatInviteLinkMapper {
	static toTelegram(
		options: TgAirBot.EditChatInviteLink,
	): Telegram.EditChatInviteLink {
		const entity: Telegram.EditChatInviteLink = {
			chat_id: options.chatId,
			invite_link: options.inviteLink,
			member_limit: options.memberLimit,
			creates_join_request: options.createsJoinRequest,
			name: options.name,
			expire_date: options.expireDate,
		};

		return RemoveUndefinedKeysFromObject<Telegram.EditChatInviteLink>(
			entity,
		);
	}
}
