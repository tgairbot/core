import { Audio, Voice } from "./audio";
import {
	Chat,
	ChatShared,
	VideoChatEnded,
	VideoChatParticipantsInvited,
	VideoChatScheduled,
	VideoChatStarted,
} from "./chat";
import { PhotoSize } from "./photo";
import { User, UserShared } from "./user";
import { Document } from "./document";
import { Sticker } from "./sticker";
import { Video, VideoNote } from "./video";
import { Contact } from "./contact";
import { Dice } from "./dice";
import { Game } from "./game";
import { Poll } from "./poll";
import { Location } from "./location";
import { Venue } from "./venue";
import { Invoice, SuccessfulPayment } from "./payment";
import { PassportData } from "./pasport";
import {
	ForceReply,
	InlineKeyboardMarkup,
	ReplyKeyboardMarkup,
	ReplyKeyboardRemove,
} from "./keyboard";
import {
	ForumTopicClosed,
	ForumTopicCreated,
	ForumTopicEdited,
	ForumTopicReopened,
	GeneralForumTopicHidden,
	GeneralForumTopicUnhidden,
} from "./forum";
import { Animation } from "./animation";

export enum ParseMode {
	Markdown = "Markdown",
	MarkdownV2 = "MarkdownV2",
	HTML = "HTML",
}

export interface Message {
	message_id: number;
	message_thread_id?: number;
	from?: User;
	sender_chat?: Chat;
	date: number;
	chat: Chat;
	forward_from?: User;
	forward_from_chat?: Chat;
	forward_from_message_id?: number;
	forward_sigrature?: string;
	forward_sender_name?: string;
	forward_date?: number;
	is_topic_message?: true;
	is_automatic_forward?: true;
	reply_to_message?: Message;
	via_bot?: User;
	edit_date?: number;
	has_protected_content?: true;
	media_group_id?: string;
	author_signature?: string;
	text?: string;
	entities?: MessageEntity[];
	animation?: Animation;
	audio?: Audio;
	document?: Document;
	photo?: PhotoSize[];
	sticker?: Sticker;
	video?: Video;
	video_note?: VideoNote;
	voice?: Voice;
	caption?: string;
	caption_entities?: MessageEntity[];
	has_media_spoiler?: true;
	contact?: Contact;
	dice?: Dice;
	game?: Game;
	poll?: Poll;
	venue?: Venue;
	location?: Location;
	new_chat_members?: User[];
	left_chat_member?: User;
	new_chat_title?: string;
	new_chat_photo?: PhotoSize[];
	delete_chat_photo?: true;
	group_chat_created?: true;
	supergroup_chat_created?: true;
	channel_chat_created?: true;
	message_auto_delete_timer_changed?: MessageAutoDeleteTimerChanged;
	migrate_to_chat_id?: number;
	migrate_from_chat_id?: number;
	pinned_message?: Message;
	invoice?: Invoice;
	successful_payment?: SuccessfulPayment;
	user_shared?: UserShared;
	chat_shared?: ChatShared;
	connected_website?: string;
	write_access_allowed?: WriteAccessAllowed;
	passport_data?: PassportData;
	proximity_alert_triggered?: ProximityAlertTriggered;
	forum_topic_created?: ForumTopicCreated;
	forum_topic_edited?: ForumTopicEdited;
	forum_topic_closed?: ForumTopicClosed;
	forum_topic_reopened?: ForumTopicReopened;
	general_forum_topic_hidden?: GeneralForumTopicHidden;
	general_forum_topic_unhidden?: GeneralForumTopicUnhidden;
	video_chat_scheduled?: VideoChatScheduled;
	video_chat_started?: VideoChatStarted;
	video_chat_ended?: VideoChatEnded;
	video_chat_participants_invited?: VideoChatParticipantsInvited;
	web_app_data?: WebAppData;
	reply_markup?: InlineKeyboardMarkup;
}

export interface SendMessageOptions {
	chat_id: number | string;
	message_thread_id?: number;
	text: string;
	parse_mode?: ParseMode;
	entities?: MessageEntity[];
	disable_web_page_preview?: boolean;
	disable_notification?: boolean;
	protect_content?: boolean;
	reply_to_message_id?: number;
	allow_sending_without_reply?: boolean;
	reply_markup?:
		| InlineKeyboardMarkup
		| ReplyKeyboardMarkup
		| ReplyKeyboardRemove
		| ForceReply;
}

export type MessageEntityType =
	| "mention"
	| "hashtag"
	| "cashtag"
	| "bot_command"
	| "url"
	| "email"
	| "phone_number"
	| "bold"
	| "italic"
	| "underline"
	| "strikethrough"
	| "spoiler"
	| "code"
	| "pre"
	| "text_link"
	| "text_mention"
	| "custom_emoji";

export interface MessageEntity {
	type: MessageEntityType;
	offset: number;
	length: number;
	url?: string;
	user?: User;
	language?: string;
	custom_emoji_id?: string;
}

export interface MessageAutoDeleteTimerChanged {
	message_auto_delete_time: number;
}

export interface WriteAccessAllowed {
	web_app_name?: string;
}

export interface ProximityAlertTriggered {
	traveler: User;
	watcher: User;
	distance: number;
}

export interface WebAppData {
	data: string;
	button_text: string;
}

export interface MessageId {
	message_id: number;
}
