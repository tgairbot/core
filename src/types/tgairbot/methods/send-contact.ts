import {
	ForceReply,
	InlineKeyboardMarkup,
	ReplyKeyboardMarkup,
	ReplyKeyboardRemove,
} from "../keyboard";

export interface SendContact {
	chatId: number | string;
	messageThreadId?: number;
	phoneNumber: string;
	firstName: string;
	lastName?: string;
	vcard?: string;
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
