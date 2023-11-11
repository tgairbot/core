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
			emojiStatusExpirationDate: chat.emoji_status_expiration_date,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.Chat>(entity);
	}

	// static toTelegram(options: TgAirBot.Chat): Telegram.Chat {
	// 	const entity: Telegram.Chat = {
	// 		id: options.id,
	// 		type: options.type,
	// 		bio: options.bio,
	// 		photo: options.photo
	// 			? ChatMapper.chatPhotoToTelegram(options.photo)
	// 			: undefined,
	// 		active_usernames: options.activeUsernames,
	// 		can_set_sticker_set: options.canSetStickerSet,
	// 		description: options.description,
	// 		emoji_status_custom_emoji_id: options.emojiStatusCustomEmojiId,
	// 		first_name: options.firstName,
	// 		has_aggressive_anti_spam_enabled:
	// 			options.hasAggressiveAntiSpamEnabled,
	// 		has_hidden_members: options.hasHiddenMembers,
	// 		has_private_forwards: options.hasPrivateForwards,
	// 		has_protected_content: options.hasProtectedContent,
	// 		invite_link: options.inviteLink,
	// 		has_restricted_voice_and_video_messages:
	// 			options.hasRestrictedVoiceAndVideoMessages,
	// 		is_forum: options.isForum,
	// 		join_by_request: options.joinByRequest,
	// 		linked_chat_id: options.linkedChatId,
	// 		join_to_send_messages: options.joinToSendMessages,
	// 		last_name: options.lastName,
	// 		message_auto_delete_time: options.messageAutoDeleteTime,
	// 		title: options.title,
	// 		username: options.username,
	// 		slow_mode_delay: options.slowModeDelay,
	// 		sticker_set_name: options.stickerSetName,
	// 		permissions: options.permissions
	// 			? ChatMapper.permissionsToTelegram(options.permissions)
	// 			: undefined,
	// 		location: options.location
	// 			? ChatMapper.chatLocationToTelegram(options.location)
	// 			: undefined,
	// 		pinned_message: options.pinnedMessage
	// 			? MessageMapper.toTelegram(options.pinnedMessage)
	// 			: undefined,
	// 	};
	// }

	static chatPhotoToTAB(chatPhoto: Telegram.ChatPhoto): TgAirBot.ChatPhoto {
		const entity: TgAirBot.ChatPhoto = {
			bigFileId: chatPhoto.big_file_id,
			smallFileId: chatPhoto.small_file_id,
			bigFileUniqueId: chatPhoto.big_file_unique_id,
			smallFileUniqueId: chatPhoto.small_file_unique_id,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.ChatPhoto>(entity);
	}

	static chatPhotoToTelegram(
		chatPhoto: TgAirBot.ChatPhoto,
	): Telegram.ChatPhoto {
		const entity: Telegram.ChatPhoto = {
			big_file_id: chatPhoto.bigFileId,
			big_file_unique_id: chatPhoto.bigFileUniqueId,
			small_file_id: chatPhoto.smallFileId,
			small_file_unique_id: chatPhoto.smallFileUniqueId,
		};

		return RemoveUndefinedKeysFromObject<Telegram.ChatPhoto>(entity);
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

	static chatLocationToTelegram(
		chatLocation: TgAirBot.ChatLocation,
	): Telegram.ChatLocation {
		const entity: Telegram.ChatLocation = {
			address: chatLocation.address,
			location: LocationMapper.toTelegram(chatLocation.location),
		};

		return RemoveUndefinedKeysFromObject<Telegram.ChatLocation>(entity);
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

	static permissionsToTelegram(
		permissions: TgAirBot.ChatPermissions,
	): Telegram.ChatPermissions {
		const entity: Telegram.ChatPermissions = {
			can_change_info: permissions.canChangeInfo,
			can_add_web_page_previews: permissions.canAddWebPagePreviews,
			can_invite_users: permissions.canInviteUsers,
			can_manage_topics: permissions.canManageTopics,
			can_pin_messages: permissions.canPinMessages,
			can_send_audios: permissions.canSendAudios,
			can_send_documents: permissions.canSendDocuments,
			can_send_messages: permissions.canSendMessages,
			can_send_other_messages: permissions.canSendOtherMessages,
			can_send_photos: permissions.canSendPhotos,
			can_send_polls: permissions.canSendPolls,
			can_send_video_notes: permissions.canSendVideoNotes,
			can_send_videos: permissions.canSendVideos,
			can_send_voice_notes: permissions.canSendVoiceNotes,
		};

		return RemoveUndefinedKeysFromObject<Telegram.ChatPermissions>(entity);
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
			can_edit_stories: rights.canEditStories,
			can_post_stories: rights.canPostStories,
			can_delete_stories: rights.canDeleteStories,
		};

		return RemoveUndefinedKeysFromObject<Telegram.ChatAdministratorRights>(
			entity,
		);
	}

	static chatAdministratorRightsToTAB(
		rights: Telegram.ChatAdministratorRights,
	): TgAirBot.ChatAdministratorRights {
		const entity: TgAirBot.ChatAdministratorRights = {
			canChangeInfo: rights.can_change_info,
			canDeleteMessages: rights.can_delete_messages,
			canInviteUsers: rights.can_invite_users,
			canManageTopics: rights.can_manage_topics,
			canPinMessages: rights.can_pin_messages,
			canPostMessages: rights.can_post_messages,
			canEditMessages: rights.can_edit_messages,
			canManageChat: rights.can_manage_chat,
			canManageVideoChats: rights.can_manage_video_chats,
			canPromoteMembers: rights.can_promote_members,
			canRestrictMembers: rights.can_restrict_members,
			isAnonymous: rights.is_anonymous,
			canDeleteStories: rights.can_delete_stories,
			canEditStories: rights.can_edit_stories,
			canPostStories: rights.can_post_stories,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.ChatAdministratorRights>(
			entity,
		);
	}

	static chatMemberToTab(options: Telegram.ChatMember): TgAirBot.ChatMember {
		if (options.status === "creator")
			return ChatMapper.chatMemberOwnerToTAB(options);

		if (options.status === "administrator")
			return ChatMapper.chatMemberAdministratorToTAB(options);

		if (options.status === "member")
			return ChatMapper.chatMemberMemberToTAB(options);

		if (options.status === "kicked")
			return ChatMapper.chatMemberBunnedToTAB(options);

		if (options.status === "restricted")
			return ChatMapper.chatMemberRestrictedToTab(options);

		if (options.status === "left")
			return ChatMapper.chatMemberLeftToTAB(options);

		throw new Error("Unknown member");
	}

	static chatMemberOwnerToTAB(
		options: Telegram.ChatMemberOwner,
	): TgAirBot.ChatMemberOwner {
		const entity: TgAirBot.ChatMemberOwner = {
			status: options.status,
			isAnonymous: options.is_anonymous,
			user: UserMapper.toTAB(options.user),
			customTitle: options.custom_title,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.ChatMemberOwner>(entity);
	}

	static chatMemberAdministratorToTAB(
		options: Telegram.ChatMemberAdministrator,
	): TgAirBot.ChatMemberAdministrator {
		const entity: TgAirBot.ChatMemberAdministrator = {
			status: options.status,
			isAnonymous: options.is_anonymous,
			user: UserMapper.toTAB(options.user),
			customTitle: options.custom_title,
			canBeEdited: options.can_be_edited,
			canChangeInfo: options.can_change_info,
			canDeleteMessages: options.can_delete_messages,
			canInviteUsers: options.can_invite_users,
			canManageChat: options.can_manage_chat,
			canManageVideoChats: options.can_manage_video_chats,
			canPromoteMembers: options.can_promote_members,
			canRestrictMembers: options.can_restrict_members,
			canEditMessages: options.can_edit_messages,
			canManageTopics: options.can_manage_topics,
			canPinMessages: options.can_pin_messages,
			canPostMessages: options.can_post_messages,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.ChatMemberAdministrator>(
			entity,
		);
	}

	static chatMemberMemberToTAB(
		options: Telegram.ChatMemberMember,
	): TgAirBot.ChatMemberMember {
		const entity: TgAirBot.ChatMemberMember = {
			status: options.status,
			user: UserMapper.toTAB(options.user),
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.ChatMemberMember>(entity);
	}

	static chatMemberLeftToTAB(
		options: Telegram.ChatMemberLeft,
	): TgAirBot.ChatMemberLeft {
		const entity: TgAirBot.ChatMemberLeft = {
			status: options.status,
			user: UserMapper.toTAB(options.user),
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.ChatMemberLeft>(entity);
	}

	static chatMemberRestrictedToTab(
		options: Telegram.ChatMemberRestricted,
	): TgAirBot.ChatMemberRestricted {
		const entity: TgAirBot.ChatMemberRestricted = {
			canAddWebPagePreviews: options.can_add_web_page_previews,
			canChangeInfo: options.can_change_info,
			canInviteUsers: options.can_invite_users,
			canManageTopics: options.can_manage_topics,
			canPinMessages: options.can_pin_messages,
			canSendAudios: options.can_send_audios,
			canSendDocuments: options.can_send_documents,
			canSendMessages: options.can_send_messages,
			canSendOtherMessages: options.can_send_other_messages,
			canSendPhotos: options.can_send_photos,
			canSendPolls: options.can_send_polls,
			canSendVideoNotes: options.can_send_video_notes,
			canSendVideos: options.can_send_videos,
			canSendVoiceNotes: options.can_send_voice_notes,
			is_member: options.is_member,
			status: options.status,
			untilDate: options.until_date,
			user: UserMapper.toTAB(options.user),
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.ChatMemberRestricted>(
			entity,
		);
	}

	static chatMemberBunnedToTAB(
		options: Telegram.ChatMemberBunned,
	): TgAirBot.ChatMemberBunned {
		const entity: TgAirBot.ChatMemberBunned = {
			status: options.status,
			untilDate: options.until_date,
			user: UserMapper.toTAB(options.user),
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.ChatMemberBunned>(entity);
	}

	static chatMemberUpdatedToTab(
		options: Telegram.ChatMemberUpdated,
	): TgAirBot.ChatMemberUpdated {
		const entity: TgAirBot.ChatMemberUpdated = {
			chat: ChatMapper.toTAB(options.chat),
			date: options.date,
			from: UserMapper.toTAB(options.from),
			viaChatFolderInviteLink: options.via_chat_folder_invite_link,
			newChatMember: ChatMapper.chatMemberToTab(options.new_chat_member),
			oldChatMember: ChatMapper.chatMemberToTab(options.old_chat_member),
			inviteLink: options.invite_link
				? ChatMapper.chatInviteLinkToTAB(options.invite_link)
				: undefined,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.ChatMemberUpdated>(
			entity,
		);
	}

	static chatInviteLinkToTAB(
		options: Telegram.ChatInviteLink,
	): TgAirBot.ChatInviteLink {
		const entity: TgAirBot.ChatInviteLink = {
			createsJoinRequest: options.creates_join_request,
			creator: UserMapper.toTAB(options.creator),
			inviteLink: options.invite_link,
			isPrimary: options.is_primary,
			isRevoked: options.is_revoked,
			expireDate: options.expire_date,
			memberLimit: options.member_limit,
			name: options.name,
			pendingJoinRequestCount: options.pending_join_request_count,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.ChatInviteLink>(entity);
	}

	static chatJoinRequestToTAB(
		options: Telegram.ChatJoinRequest,
	): TgAirBot.ChatJoinRequest {
		const entity: TgAirBot.ChatJoinRequest = {
			chat: ChatMapper.toTAB(options.chat),
			from: UserMapper.toTAB(options.from),
			date: options.date,
			userChatId: options.user_chat_id,
			bio: options.bio,
			inviteLink: options.invite_link
				? ChatMapper.chatInviteLinkToTAB(options.invite_link)
				: undefined,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.ChatJoinRequest>(entity);
	}
}
