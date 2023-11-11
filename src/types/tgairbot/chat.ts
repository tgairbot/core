import { ChatType } from "../telegram/chat";
import { Location } from "./location";
import { Message } from "./message";
import { User } from "./user";

export interface Chat {
	id: number;
	type: ChatType;
	title?: string;
	username?: string;
	firstName?: string;
	lastName?: string;
	isForum?: true;
	photo?: ChatPhoto;
	activeUsernames?: string[];
	emojiStatusCustomEmojiId?: string;
	bio?: string;
	hasPrivateForwards?: true;
	hasRestrictedVoiceAndVideoMessages?: true;
	joinToSendMessages?: true;
	joinByRequest?: true;
	description?: string;
	inviteLink?: string;
	pinnedMessage?: Message;
	permissions?: ChatPermissions;
	slowModeDelay?: number;
	messageAutoDeleteTime?: number;
	hasAggressiveAntiSpamEnabled?: true;
	hasHiddenMembers?: true;
	hasProtectedContent?: true;
	stickerSetName?: string;
	canSetStickerSet?: true;
	linkedChatId?: number;
	location?: ChatLocation;
	emojiStatusExpirationDate?: number;
}

export interface ChatPermissions {
	canSendMessages?: boolean;
	canSendAudios?: boolean;
	canSendDocuments?: boolean;
	canSendPhotos?: boolean;
	canSendVideos?: boolean;
	canSendVideoNotes?: boolean;
	canSendVoiceNotes?: boolean;
	canSendPolls?: boolean;
	canSendOtherMessages?: boolean;
	canAddWebPagePreviews?: boolean;
	canChangeInfo?: boolean;
	canInviteUsers?: boolean;
	canPinMessages?: boolean;
	canManageTopics?: boolean;
}

export interface ChatLocation {
	location: Location;
	address: string;
}

export interface ChatPhoto {
	smallFileId: string;
	smallFileUniqueId: string;
	bigFileId: string;
	bigFileUniqueId: string;
}

export interface ChatShared {
	requestId: number;
	chatId: number;
}

export interface VideoChatScheduled {
	startDate: number;
}

export interface VideoChatStarted {}

export interface VideoChatEnded {
	duration: number;
}

export interface VideoChatParticipantsInvited {
	users: User[];
}

export interface ChatAdministratorRights {
	isAnonymous: boolean; //	True, if the user's presence in the chat is hidden
	canManageChat: boolean; //	True, if the administrator can access the chat event log, boost list in channels, see channel members, report spam messages, see anonymous administrators in supergroups and ignore slow mode. Implied by any other administrator privilege
	canDeleteMessages: boolean; //	True, if the administrator can delete messages of other users
	canManageVideoChats: boolean; //	True, if the administrator can manage video chats
	canRestrictMembers: boolean; //	True, if the administrator can restrict, ban or unban chat members, or access supergroup statistics
	canPromoteMembers: boolean; //	True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by the user)
	canChangeInfo: boolean; //	True, if the user is allowed to change the chat title, photo and other settings
	canInviteUsers: boolean; //	True, if the user is allowed to invite new users to the chat
	canPostMessages?: boolean; //	Optional. True, if the administrator can post messages in the channel, or access channel statistics; channels only
	canEditMessages?: boolean; //	Optional. True, if the administrator can edit messages of other users and can pin messages; channels only
	canPinMessages?: boolean; //	Optional. True, if the user is allowed to pin messages; groups and supergroups only
	canPostStories?: boolean; //	Optional. True, if the administrator can post stories in the channel; channels only
	canEditStories?: boolean; //	Optional. True, if the administrator can edit stories posted by other users; channels only
	canDeleteStories?: boolean; //	Optional. True, if the administrator can delete stories posted by other users; channels only
	canManageTopics?: boolean; //	Optional. True, if the user is allowed to create, rename, close, and reopen forum topics; supergroups only
}

export interface ChatInviteLink {
	inviteLink: string;
	creator: User;
	createsJoinRequest: boolean;
	isPrimary: boolean;
	isRevoked: boolean;
	name?: string;
	expireDate?: number;
	memberLimit?: number;
	pendingJoinRequestCount?: number;
}

export type ChatMember =
	| ChatMemberOwner
	| ChatMemberAdministrator
	| ChatMemberMember
	| ChatMemberRestricted
	| ChatMemberLeft
	| ChatMemberBunned;

export interface ChatMemberOwner {
	status: "creator";
	user: User;
	isAnonymous: boolean;
	customTitle?: string;
}

export interface ChatMemberAdministrator {
	status: "administrator";
	user: User;
	canBeEdited: boolean;
	isAnonymous: boolean;
	canManageChat: boolean;
	canDeleteMessages: boolean;
	canManageVideoChats: boolean;
	canRestrictMembers: boolean;
	canPromoteMembers: boolean;
	canChangeInfo: boolean;
	canInviteUsers: boolean;
	canPostMessages?: boolean;
	canEditMessages?: boolean;
	canPinMessages?: boolean;
	canManageTopics?: boolean;
	customTitle?: string;
}

export interface ChatMemberMember {
	status: "member";
	user: User;
}

export interface ChatMemberRestricted {
	status: "restricted";
	user: User;
	is_member: boolean;
	canSendMessages: boolean;
	canSendAudios: boolean;
	canSendDocuments: boolean;
	canSendPhotos: boolean;
	canSendVideos: boolean;
	canSendVideoNotes: boolean;
	canSendVoiceNotes: boolean;
	canSendPolls: boolean;
	canSendOtherMessages: boolean;
	canAddWebPagePreviews: boolean;
	canChangeInfo: boolean;
	canInviteUsers: boolean;
	canPinMessages: boolean;
	canManageTopics: boolean;
	untilDate: number;
}

export interface ChatMemberLeft {
	status: "left";
	user: User;
}

export interface ChatMemberBunned {
	status: "kicked";
	user: User;
	untilDate: number;
}

export interface ChatMemberUpdated {
	chat: Chat;
	from: User;
	date: number;
	oldChatMember: ChatMember;
	newChatMember: ChatMember;
	inviteLink?: ChatInviteLink;
	viaChatFolderInviteLink?: boolean;
}

export interface ChatJoinRequest {
	chat: Chat;
	from: User;
	userChatId: number;
	date: number;
	bio?: string;
	inviteLink?: ChatInviteLink;
}
