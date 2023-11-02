import { InlineKeyboardMarkup } from "../keyboard";

export interface EditMessageReplyMarkup {
	chatId?: number | string;
	messageId?: number;
	inlineMessageId?: string;
	replyMarkup?: InlineKeyboardMarkup;
}
