import * as Telegram from "../types/telegram";
import * as TgAirBot from "../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../utils/remove-undefined-keys-from-object";
import { LocationMapper } from "./location";
import { MessageMapper } from "./message";
import { UserMapper } from "./user";

export class ChatMapper {
	static toTAB(chat: Telegram.Chat): TgAirBot.Chat {
		const entity: TgAirBot.Chat = {
			id: chat.id,
			type: chat.type,
			username: chat.username,
			lastName: chat.last_name,
			firstName: chat.first_name,
			bio: chat.bio,
			photo: chat.photo
				? ChatMapper.chatPhotoToTAB(chat.photo)
				: undefined,
			title: chat.title,
			isForum: chat.is_forum,
			location: chat.location
				? ChatMapper.chatLocationToTab(chat.location)
				: undefined,
			inviteLink: chat.invite_link,
			description: chat.description,
			linkedChatId: chat.linked_chat_id,
			joinByRequest: chat.join_by_request,
			slowModeDelay: chat.slow_mode_delay,
			pinnedMessage: chat.pinned_message
				? MessageMapper.toTAB(chat.pinned_message)
				: undefined,
			stickerSetName: chat.sticker_set_name,
			activeUsernames: chat.active_usernames,
			canSetStickerSet: chat.can_set_sticker_set,
			hasHiddenMembers: chat.has_hidden_members,
			hasPrivateForwards: chat.has_private_forwards,
			joinToSendMessages: chat.join_to_send_messages,
			messageAutoDeleteTime: chat.message_auto_delete_time,
			hasProtectedContent: chat.has_protected_content,
			emojiStatusCustomEmojiId: chat.emoji_status_custom_emoji_id,
			hasAggressiveAntiSpamEnabled: chat.has_aggressive_anti_spam_enabled,
			hasRestrictedVoiceAndVideoMessages:
				chat.has_restricted_voice_and_video_messages,
			permissions: chat.permissions
				? ChatMapper.permissionsToTAB(chat.permissions)
				: undefined,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.Chat>(entity);
	}

	static chatPhotoToTAB(chatPhoto: Telegram.ChatPhoto): TgAirBot.ChatPhoto {
		const entity: TgAirBot.ChatPhoto = {
			bigFileId: chatPhoto.big_file_id,
			smallFileId: chatPhoto.small_file_id,
			bigFileUniqueId: chatPhoto.big_file_unique_id,
			smallFileUniqueId: chatPhoto.small_file_unique_id,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.ChatPhoto>(entity);
	}

	static chatLocationToTab(
		chatLocation: Telegram.ChatLocation,
	): TgAirBot.ChatLocation {
		const entity: TgAirBot.ChatLocation = {
			address: chatLocation.address,
			location: LocationMapper.toTAB(chatLocation.location),
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.ChatLocation>(entity);
	}

	static permissionsToTAB(
		permissions: Telegram.ChatPermissions,
	): TgAirBot.ChatPermissions {
		const entity: TgAirBot.ChatPermissions = {
			canSendPolls: permissions.can_send_polls,
			canChangeInfo: permissions.can_change_info,
			canSendAudios: permissions.can_send_audios,
			canSendPhotos: permissions.can_send_photos,
			canSendVideos: permissions.can_send_videos,
			canInviteUsers: permissions.can_invite_users,
			canPinMessages: permissions.can_pin_messages,
			canManageTopics: permissions.can_manage_topics,
			canSendMessages: permissions.can_send_messages,
			canSendDocuments: permissions.can_send_documents,
			canSendVideoNotes: permissions.can_send_video_notes,
			canSendVoiceNotes: permissions.can_send_voice_notes,
			canSendOtherMessages: permissions.can_send_other_messages,
			canAddWebPagePreviews: permissions.can_add_web_page_previews,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.ChatPermissions>(entity);
	}

	static chatSharedToTAB(
		chatShared: Telegram.ChatShared,
	): TgAirBot.ChatShared {
		const entity: TgAirBot.ChatShared = {
			requestId: chatShared.request_id,
			chatId: chatShared.chat_id,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.ChatShared>(entity);
	}

	static videoChatScheduledToTAB(
		videoChatScheduled: Telegram.VideoChatScheduled,
	): TgAirBot.VideoChatScheduled {
		const entity: TgAirBot.VideoChatScheduled = {
			startDate: videoChatScheduled.start_date,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.VideoChatScheduled>(
			entity,
		);
	}

	static videoChatStartedToTAB(
		videoChatStarted: Telegram.VideoChatStarted,
	): TgAirBot.VideoChatStarted {
		const entity: TgAirBot.VideoChatStarted = {};

		return RemoveUndefinedKeysFromObject<TgAirBot.VideoChatStarted>(entity);
	}

	static videoChatEndedToTAB(
		videoChatEnded: Telegram.VideoChatEnded,
	): TgAirBot.VideoChatEnded {
		const entity: TgAirBot.VideoChatEnded = {
			duration: videoChatEnded.duration,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.VideoChatEnded>(entity);
	}

	static videoChatParticipantsInvitedToTAB(
		videoChatParticipantsInvited: Telegram.VideoChatParticipantsInvited,
	): TgAirBot.VideoChatParticipantsInvited {
		const entity: TgAirBot.VideoChatParticipantsInvited = {
			users: videoChatParticipantsInvited.users.map(UserMapper.toTAB),
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.VideoChatParticipantsInvited>(
			entity,
		);
	}

	static chatAdministratorRightsToTelegram(
		rights: TgAirBot.ChatAdministratorRights,
	): Telegram.ChatAdministratorRights {
		const entity: Telegram.ChatAdministratorRights = {
			is_anonymous: rights.isAnonymous,
			can_manage_topics: rights.canManageTopics,
			can_edit_messages: rights.canEditMessages,
			can_pin_messages: rights.canPinMessages,
			can_invite_users: rights.canInviteUsers,
			can_manage_chat: rights.canManageChat,
			can_change_info: rights.canChangeInfo,
			can_restrict_members: rights.canRestrictMembers,
			can_post_messages: rights.canPostMessages,
			can_delete_messages: rights.canDeleteMessages,
			can_promote_members: rights.canPromoteMembers,
			can_manage_video_chats: rights.canManageVideoChats,
		};

		return RemoveUndefinedKeysFromObject<Telegram.ChatAdministratorRights>(
			entity,
		);
	}
}
