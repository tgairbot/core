import { InputMedia } from "../input";
import { InlineKeyboardMarkup } from "../keyboard";

export interface EditMessageMedia {
	chatId?: number | string;
	messageId?: number;
	inlineMessageId?: string;
	media: InputMedia;
	replyMarkup?: InlineKeyboardMarkup;
}
