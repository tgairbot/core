import { ParseMode } from "../../telegram";
import {
	ForceReply,
	InlineKeyboardMarkup,
	ReplyKeyboardMarkup,
	ReplyKeyboardRemove,
} from "../keyboard";
import { MessageEntity } from "../message";

export interface CopyMessage {
	chatId: number | string;
	messageThreadId?: number;
	fromChatId: number | string;
	messageId: number;
	caption?: string;
	parseMode?: ParseMode;
	captionEntities?: MessageEntity[];
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
