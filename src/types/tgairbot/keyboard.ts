import { PollType } from "../telegram/poll";
import { ChatAdministratorRights } from "./chat";

export interface InlineKeyboardMarkup {
	inlineKeyboard: InlineKeyboardButton[][];
}

export interface ReplyKeyboardMarkup {
	keyboard: KeyboardButton[][];
	isPersistent?: boolean;
	resizeKeyboard?: boolean;
	oneTimeKeyboard?: boolean;
	inputFieldPlaceholder?: string;
	selective?: boolean;
}

export interface ReplyKeyboardRemove {
	removeKeyboard: true;
	selective?: boolean;
}

export interface KeyboardButton {
	requestUser?: KeyboardButtonRequestUser;
	requestChat?: KeyboardButtonRequestChat;
	requestContact?: boolean;
	requestLocation?: boolean;
	requestPoll?: KeyboardButtonPollType;
	webApp?: WebAppInfo;
}

export interface KeyboardButtonRequestUser {
	requestId: number;
	userIsBot?: boolean;
	userIsPremium?: boolean;
}

export interface KeyboardButtonRequestChat {
	requestId: number;
	chatIsChannel: boolean;
	chatIsForum?: boolean;
	chatHasUsername?: boolean;
	chatIsCreated?: boolean;
	userAdministratorRights?: ChatAdministratorRights;
	botAdministratorRights?: ChatAdministratorRights;
	botIsMember?: boolean;
}

export interface KeyboardButtonPollType {
	type: PollType;
}

export interface InlineKeyboardButton {
	text: string;
	url?: string;
	callbackData?: string;
	webApp?: WebAppInfo;
	loginUrl?: LoginUrl;
	switchInlineQuery?: string;
	switchInlineQueryCurrentChat?: string;
	switchInlineQueryChosenChat?: SwitchInlineQueryChosenChat;
	callbackGame?: CallbackGame;
}

export interface WebAppInfo {
	url: string;
}

export interface LoginUrl {
	url: string;
	forwardText?: string;
	botUsername?: string;
	requestWriteAccess?: boolean;
}

export interface SwitchInlineQueryChosenChat {
	query?: string;
	allowUserChats?: boolean;
	allowBotChats?: boolean;
	allowGroupChats?: boolean;
	allowChannelChats?: boolean;
}

export interface CallbackGame {}

export interface ForceReply {
	forceReply: true;
	inputFieldPlaceholder?: string;
	selective?: boolean;
}
