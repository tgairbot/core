import { ChatAdministratorRights } from "./chat";
import { PollType } from "./poll";

export interface InlineKeyboardMarkup {
	inline_keyboard: InlineKeyboardButton[][];
}

export interface ReplyKeyboardMarkup {
	keyboard: KeyboardButton[][];
	is_persistent?: boolean;
	resize_keyboard?: boolean;
	one_time_keyboard?: boolean;
	input_field_placeholder?: string;
	selective?: boolean;
}

export interface ReplyKeyboardRemove {
	remove_keyboard: true;
	selective?: boolean;
}

export interface KeyboardButton {
	request_user?: KeyboardButtonRequestUser;
	request_chat?: KeyboardButtonRequestChat;
	request_contact?: boolean;
	request_location?: boolean;
	request_poll?: KeyboardButtonPollType;
	web_app?: WebAppInfo;
}

export interface KeyboardButtonRequestUser {
	request_id: number;
	user_is_bot?: boolean;
	user_is_premium?: boolean;
}

export interface KeyboardButtonRequestChat {
	request_id: number;
	chat_is_channel: boolean;
	chat_is_forum?: boolean;
	chat_has_username?: boolean;
	chat_is_created?: boolean;
	user_administrator_rights?: ChatAdministratorRights;
	bot_administrator_rights?: ChatAdministratorRights;
	bot_is_member?: boolean;
}

export interface KeyboardButtonPollType {
	type: PollType;
}

export interface InlineKeyboardButton {
	text: string;
	url?: string;
	callback_data?: string;
	web_app?: WebAppInfo;
	login_url?: LoginUrl;
	switch_inline_query?: string;
	switch_inline_query_current_chat?: string;
	switch_inline_query_chosen_chat?: SwitchInlineQueryChosenChat;
	callback_game?: CallbackGame;
}

export interface WebAppInfo {
	url: string;
}

export interface LoginUrl {
	url: string;
	forward_text?: string;
	bot_username?: string;
	request_write_access?: boolean;
}

export interface SwitchInlineQueryChosenChat {
	query?: string;
	allow_user_chats?: boolean;
	allow_bot_chats?: boolean;
	allow_group_chats?: boolean;
	allow_channel_chats?: boolean;
}

export interface CallbackGame {}

export interface ForceReply {
	force_reply: true;
	input_field_placeholder?: string;
	selective?: boolean;
}
