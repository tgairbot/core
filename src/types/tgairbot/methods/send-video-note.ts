import { ReadStream } from "fs";
import {
	ForceReply,
	InlineKeyboardMarkup,
	ReplyKeyboardMarkup,
	ReplyKeyboardRemove,
} from "../keyboard";

export interface SendVideoNote {
	chatId: number | string;
	messageThreadId?: number;
	videoNote: ReadStream | string;
	duration?: number;
	length?: number;
	thumbnail?: ReadStream | string;
	disableNotification?: boolean;
	protectContent?: boolean;
	replyToMessageId?: number;
	allowSendingWithoutReply?: boolean;
	replyMarkup?:
		| InlineKeyboardMarkup
		| ReplyKeyboardMarkup
		| ReplyKeyboardRemove
		| ForceReply;
}
