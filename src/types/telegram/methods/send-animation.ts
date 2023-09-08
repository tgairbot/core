import { ReadStream } from "fs";
import { MessageEntity, ParseMode } from "../message";
import {
	ForceReply,
	InlineKeyboardMarkup,
	ReplyKeyboardMarkup,
	ReplyKeyboardRemove,
} from "../keyboard";

export interface SendAnimation {
	chat_id: number | string;
	message_thread_id?: number;
	animation: ReadStream | string;
	duration?: number;
	width?: number;
	height?: number;
	thumbnail?: ReadStream | string;
	caption?: string;
	parse_mode?: ParseMode;
	caption_entities?: MessageEntity[];
	has_spoiler?: boolean;
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
