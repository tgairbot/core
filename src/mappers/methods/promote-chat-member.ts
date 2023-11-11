import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class PromoteChatMemberMapper {
	static toTelegram(
		options: TgAirBot.PromoteChatMember,
	): Telegram.PromoteChatMember {
		const entity: Telegram.PromoteChatMember = {
			chat_id: options.chatId,
			user_id: options.userId,
			can_manage_topics: options.canManageTopics,
			can_edit_messages: options.canEditMessages,
			can_pin_messages: options.canPinMessages,
			can_invite_users: options.canInviteUsers,
			can_manage_chat: options.canManageChat,
			can_change_info: options.canChangeInfo,
			can_restrict_members: options.canRestrictMembers,
			can_post_messages: options.canPostMessages,
			can_delete_messages: options.canDeleteMessages,
			can_promote_members: options.canPromoteMembers,
			can_manage_video_chats: options.canManageVideoChats,
			is_anonymous: options.isAnonymous,
			can_delete_stories: options.canDeleteStories,
			can_edit_stories: options.canEditStories,
			can_post_stories: options.canPostStories,
		};

		return RemoveUndefinedKeysFromObject<Telegram.PromoteChatMember>(
			entity,
		);
	}
}
