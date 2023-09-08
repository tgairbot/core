import { Location } from "./location";
import { Message } from "./message";
import { User } from "./user";

export type ChatType = "private" | "group" | "supergroup" | "channel";

export interface Chat {
	id: number;
	type: ChatType;
	title?: string;
	username?: string;
	first_name?: string;
	last_name?: string;
	is_forum?: true;
	photo?: ChatPhoto;
	active_usernames?: string[];
	emoji_status_custom_emoji_id?: string;
	bio?: string;
	has_private_forwards?: true;
	has_restricted_voice_and_video_messages?: true;
	join_to_send_messages?: true;
	join_by_request?: true;
	description?: string;
	invite_link?: string;
	pinned_message?: Message;
	permissions?: ChatPermissions;
	slow_mode_delay?: number;
	message_auto_delete_time?: number;
	has_aggressive_anti_spam_enabled?: true;
	has_hidden_members?: true;
	has_protected_content?: true;
	sticker_set_name?: string;
	can_set_sticker_set?: true;
	linked_chat_id?: number;
	location?: ChatLocation;
}

export interface ChatPermissions {
	can_send_messages?: boolean;
	can_send_audios?: boolean;
	can_send_documents?: boolean;
	can_send_photos?: boolean;
	can_send_videos?: boolean;
	can_send_video_notes?: boolean;
	can_send_voice_notes?: boolean;
	can_send_polls?: boolean;
	can_send_other_messages?: boolean;
	can_add_web_page_previews?: boolean;
	can_change_info?: boolean;
	can_invite_users?: boolean;
	can_pin_messages?: boolean;
	can_manage_topics?: boolean;
}

export interface ChatLocation {
	location: Location;
	address: string;
}

export interface ChatPhoto {
	small_file_id: string;
	small_file_unique_id: string;
	big_file_id: string;
	big_file_unique_id: string;
}

export interface ChatShared {
	request_id: number;
	chat_id: number;
}

export interface VideoChatScheduled {
	start_date: number;
}

export interface VideoChatStarted {}

export interface VideoChatEnded {
	duration: number;
}

export interface VideoChatParticipantsInvited {
	users: User[];
}

export interface ChatAdministratorRights {
	is_anonymous: boolean;
	can_manage_chat: boolean;
	can_delete_messages: boolean;
	can_manage_video_chats: boolean;
	can_restrict_members: boolean;
	can_promote_members: boolean;
	can_change_info: boolean;
	can_invite_users: boolean;
	can_post_messages?: boolean;
	can_edit_messages?: boolean;
	can_pin_messages?: boolean;
	can_manage_topics?: boolean;
}

export interface ChatInviteLink {
	invite_link: string;
	creator: User;
	creates_join_request: boolean;
	is_primary: boolean;
	is_revoked: boolean;
	name?: string;
	expire_date?: number;
	member_limit?: number;
	pending_join_request_count?: number;
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
	is_anonymous: boolean;
	custom_title?: string;
}

export interface ChatMemberAdministrator {
	status: "administrator";
	user: User;
	can_be_edited: boolean;
	is_anonymous: boolean;
	can_manage_chat: boolean;
	can_delete_messages: boolean;
	can_manage_video_chats: boolean;
	can_restrict_members: boolean;
	can_promote_members: boolean;
	can_change_info: boolean;
	can_invite_users: boolean;
	can_post_messages?: boolean;
	can_edit_messages?: boolean;
	can_pin_messages?: boolean;
	can_manage_topics?: boolean;
	custom_title?: string;
}

export interface ChatMemberMember {
	status: "member";
	user: User;
}

export interface ChatMemberRestricted {
	status: "restricted";
	user: User;
	is_member: boolean;
	can_send_messages: boolean;
	can_send_audios: boolean;
	can_send_documents: boolean;
	can_send_photos: boolean;
	can_send_videos: boolean;
	can_send_video_notes: boolean;
	can_send_voice_notes: boolean;
	can_send_polls: boolean;
	can_send_other_messages: boolean;
	can_add_web_page_previews: boolean;
	can_change_info: boolean;
	can_invite_users: boolean;
	can_pin_messages: boolean;
	can_manage_topics: boolean;
	until_date: number;
}

export interface ChatMemberLeft {
	status: "left";
	user: User;
}

export interface ChatMemberBunned {
	status: "kicked";
	user: User;
	until_date: number;
}

export interface ChatMemberUpdated {
	chat: Chat;
	from: User;
	date: number;
	old_chat_member: ChatMember;
	new_chat_member: ChatMember;
	invite_link?: ChatInviteLink;
	via_chat_folder_invite_link?: boolean;
}

export interface ChatJoinRequest {
	chat: Chat;
	from: User;
	user_chat_id: number;
	date: number;
	bio?: string;
	invite_link?: ChatInviteLink;
}
