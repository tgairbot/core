import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class CreateChatInviteLinkMapper {
	static toTelegram(
		options: TgAirBot.CreateChatInviteLink,
	): Telegram.CreateChatInviteLink {
		const entity: Telegram.CreateChatInviteLink = {
			chat_id: options.chatId,
			expire_date: options.expireDate,
			member_limit: options.memberLimit,
			creates_join_request: options.createsJoinRequest,
			name: options.name,
		};

		return RemoveUndefinedKeysFromObject<Telegram.CreateChatInviteLink>(
			entity,
		);
	}
}
