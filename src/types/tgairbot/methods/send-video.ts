import { ReadStream } from "fs";
import { MessageEntity } from "../message";
import {
	ForceReply,
	InlineKeyboardMarkup,
	ReplyKeyboardMarkup,
	ReplyKeyboardRemove,
} from "../keyboard";
import { ParseMode } from "../../telegram";

export interface SendVideo {
	chatId: number | string;
	messageThreadId?: number;
	video: ReadStream | string;
	duration?: number;
	width?: number;
	height?: number;
	thumbnail?: ReadStream | string;
	caption?: string;
	parseMode?: ParseMode;
	captionEntities?: MessageEntity[];
	hasSpoiler?: boolean;
	supportsStreaming?: boolean;
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
