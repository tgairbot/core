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
import { InlineKeyboardMarkup } from "./keyboard";
import {
	ForumTopicClosed,
	ForumTopicCreated,
	ForumTopicEdited,
	ForumTopicReopened,
	GeneralForumTopicHidden,
	GeneralForumTopicUnhidden,
} from "./forum";
import { MessageEntityType } from "../telegram";
import { Animation } from "./animation";

export interface Message {
	messageId: number;
	messageThreadId?: number;
	from?: User;
	senderChat?: Chat;
	date: number;
	chat: Chat;
	forwardFrom?: User;
	forwardFromChat?: Chat;
	forwardFromMessageId?: number;
	forwardSignature?: string;
	forwardSenderName?: string;
	forwardDate?: number;
	isTopicMessage?: true;
	isAutomaticForward?: true;
	replyToMessage?: Message;
	viaBot?: User;
	editDate?: number;
	hasProtectedContent?: true;
	mediaGroupId?: string;
	authorSignature?: string;
	text?: string;
	entities?: MessageEntity[];
	animation?: Animation;
	audio?: Audio;
	document?: Document;
	photo?: PhotoSize[];
	sticker?: Sticker;
	video?: Video;
	videoNote?: VideoNote;
	voice?: Voice;
	caption?: string;
	captionEntities?: MessageEntity[];
	hasMediaSpoiler?: true;
	contact?: Contact;
	dice?: Dice;
	game?: Game;
	poll?: Poll;
	venue?: Venue;
	location?: Location;
	newChatMembers?: User[];
	leftChatMember?: User;
	newChatTitle?: string;
	newChatPhoto?: PhotoSize[];
	deleteChatPhoto?: true;
	groupChatCreated?: true;
	supergroupChatCreated?: true;
	channelChatCreated?: true;
	messageAutoDeleteTimerChanged?: MessageAutoDeleteTimerChanged;
	migrateToChatId?: number;
	migrateFromChatId?: number;
	pinnedMessage?: Message;
	invoice?: Invoice;
	successfulPayment?: SuccessfulPayment;
	userShared?: UserShared;
	chatShared?: ChatShared;
	connectedWebsite?: string;
	writeAccessAllowed?: WriteAccessAllowed;
	passportData?: PassportData;
	proximityAlertTriggered?: ProximityAlertTriggered;
	forumTopicCreated?: ForumTopicCreated;
	forumTopicEdited?: ForumTopicEdited;
	forumTopicClosed?: ForumTopicClosed;
	forumTopicReopened?: ForumTopicReopened;
	generalForumTopicHidden?: GeneralForumTopicHidden;
	generalForumTopicUnhidden?: GeneralForumTopicUnhidden;
	videoChatScheduled?: VideoChatScheduled;
	videoChatStarted?: VideoChatStarted;
	videoChatEnded?: VideoChatEnded;
	videoChatParticipantsInvited?: VideoChatParticipantsInvited;
	webAppData?: WebAppData;
	replyMarkup?: InlineKeyboardMarkup;
}

export interface MessageEntity {
	type: MessageEntityType;
	offset: number;
	length: number;
	url?: string;
	user?: User;
	language?: string;
	customEmojiId?: string;
}

export interface MessageAutoDeleteTimerChanged {
	messageAutoDeleteTime: number;
}

export interface WriteAccessAllowed {
	webAppName?: string;
}

export interface ProximityAlertTriggered {
	traveler: User;
	watcher: User;
	distance: number;
}

export interface WebAppData {
	data: string;
	buttonText: string;
}

export interface MessageId {
	messageId: number;
}
