import { InlineKeyboardMarkup } from "../keyboard";

export interface StopMessageLiveLocation {
	chatId?: number | string;
	messageId?: number;
	inlineMessageId?: string;
	replyMarkup?: InlineKeyboardMarkup;
}
