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
