import {
	ForceReply,
	InlineKeyboardMarkup,
	ReplyKeyboardMarkup,
	ReplyKeyboardRemove,
} from "../keyboard";
import { MessageEntity } from "../message";
import { PollType } from "../poll";

export interface SendPoll {
	chat_id: number | string;
	message_thread_id?: number;
	question: string;
	options: string[];
	is_anonymous?: boolean;
	type?: PollType;
	allows_multiple_answers?: boolean;
	correct_option_id?: number;
	explanation?: string;
	explanation_parse_mode?: string;
	explanation_entities?: MessageEntity[];
	open_period?: number;
	close_date?: number;
	is_closed?: boolean;
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
