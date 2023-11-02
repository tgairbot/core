import { InlineKeyboardMarkup } from "../keyboard";

export interface SendGame {
	chatId: number | string;
	messageThreadId?: number;
	gameShortName: string;
	disableNotification?: boolean;
	protectContent?: boolean;
	replyToMessageId?: number;
	allowSendingWithoutReply?: boolean;
	replyMarkup?: InlineKeyboardMarkup;
}
