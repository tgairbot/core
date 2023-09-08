import { ReadStream } from "fs";
import { MessageEntity } from "../message";
import {
	ForceReply,
	InlineKeyboardMarkup,
	ReplyKeyboardMarkup,
	ReplyKeyboardRemove,
} from "../keyboard";
import { ParseMode } from "../../telegram";

export interface SendDocument {
	chatId: number | string;
	messageThreadId?: number;
	document: ReadStream | string;
	thumbnail?: ReadStream | string;
	caption?: string;
	parseMode?: ParseMode;
	captionEntities?: MessageEntity[];
	disableContentTypeDetection?: boolean;
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
