import {
	ForceReply,
	InlineKeyboardMarkup,
	ReplyKeyboardMarkup,
	ReplyKeyboardRemove,
} from "../keyboard";
import { MessageEntity, ParseMode } from "../message";

export interface CopyMessage {
	chat_id: number | string;
	message_thread_id?: number;
	from_chat_id: number | string;
	message_id: number;
	caption?: string;
	parse_mode?: ParseMode;
	caption_entities?: MessageEntity[];
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
