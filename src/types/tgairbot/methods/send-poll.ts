import { PollType } from "../../telegram";
import {
	ForceReply,
	InlineKeyboardMarkup,
	ReplyKeyboardMarkup,
	ReplyKeyboardRemove,
} from "../keyboard";
import { MessageEntity } from "../message";

export interface SendPoll {
	chatId: number | string;
	messageThreadId?: number;
	question: string;
	options: string[];
	isAnonymous?: boolean;
	type?: PollType;
	allowsMultipleAnswers?: boolean;
	correctOptionId?: number;
	explanation?: string;
	explanationParseMode?: string;
	explanationEntities?: MessageEntity[];
	openPeriod?: number;
	closeDate?: number;
	isClosed?: boolean;
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
