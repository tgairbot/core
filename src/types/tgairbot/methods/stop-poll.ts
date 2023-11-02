import { InlineKeyboardMarkup } from "../keyboard";

export interface StopPoll {
	chatId?: number | string;
	messageId: number;
	replyMarkup?: InlineKeyboardMarkup;
}
