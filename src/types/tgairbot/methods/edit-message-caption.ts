import { MessageEntity } from "../message";
import { InlineKeyboardMarkup } from "../keyboard";
import { ParseMode } from "../../telegram";

export interface EditMessageCaption {
	chatId?: number | string;
	messageId?: number;
	inlineMessageId?: string;
	caption: string;
	parseMode?: ParseMode;
	captionEntities?: MessageEntity[];
	replyMarkup?: InlineKeyboardMarkup;
}
