import { MessageEntity } from "../message";
import { InlineKeyboardMarkup } from "../keyboard";
import { ParseMode } from "../../telegram";

export interface EditMessageText {
	chatId?: number | string;
	messageId?: number;
	inlineMessageId?: string;
	text: string;
	parseMode?: ParseMode;
	entities?: MessageEntity[];
	disableWebPagePreview?: boolean;
	replyMarkup?: InlineKeyboardMarkup;
}
