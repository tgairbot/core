import {
	ForceReply,
	InlineKeyboardMarkup,
	ReplyKeyboardMarkup,
	ReplyKeyboardRemove,
} from "../keyboard";

export interface SendDice {
	chatId: number | string;
	messageThreadId?: number;
	emoji?: string;
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
