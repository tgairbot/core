import { ReadStream } from "fs";
import { MessageEntity } from "../message";
import {
	ForceReply,
	InlineKeyboardMarkup,
	ReplyKeyboardMarkup,
	ReplyKeyboardRemove,
} from "../keyboard";
import { ParseMode } from "../../telegram";

export interface SendAnimation {
	chatId: number | string;
	messageThreadId?: number;
	animation: ReadStream | string;
	duration?: number;
	width?: number;
	height?: number;
	thumbnail?: ReadStream | string;
	caption?: string;
	parseMode?: ParseMode;
	captionEntities?: MessageEntity[];
	hasSpoiler?: boolean;
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
