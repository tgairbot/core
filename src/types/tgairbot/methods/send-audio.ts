import { ReadStream } from "fs";
import { MessageEntity } from "../message";
import {
	ForceReply,
	InlineKeyboardMarkup,
	ReplyKeyboardMarkup,
	ReplyKeyboardRemove,
} from "../keyboard";
import { ParseMode } from "../../telegram";

export interface SendAudio {
	chatId: number | string;
	messageThreadId?: number;
	audio: ReadStream | string;
	caption?: string;
	parseMode?: ParseMode;
	captionEntities?: MessageEntity[];
	duration?: number;
	performer?: string;
	title?: string;
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
