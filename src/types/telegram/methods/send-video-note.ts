import { ReadStream } from "fs";
import {
	ForceReply,
	InlineKeyboardMarkup,
	ReplyKeyboardMarkup,
	ReplyKeyboardRemove,
} from "../keyboard";

export interface SendVideoNote {
	chat_id: number | string;
	message_thread_id?: number;
	video_note: ReadStream | string;
	duration?: number;
	length?: number;
	thumbnail?: ReadStream | string;
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
