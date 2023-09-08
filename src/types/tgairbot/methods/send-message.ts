import { ParseMode } from "../../telegram";
import {
	ForceReply,
	InlineKeyboardMarkup,
	ReplyKeyboardMarkup,
	ReplyKeyboardRemove,
} from "../keyboard";
import { MessageEntity } from "../message";

export interface SendMessage {
	chatId: number | string;
	messageThreadId?: number;
	text: string;
	parseMode?: ParseMode;
	entities?: MessageEntity[];
	disableWebPagePreview?: boolean;
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
