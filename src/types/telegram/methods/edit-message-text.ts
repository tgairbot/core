import { MessageEntity, ParseMode } from "../message";
import { InlineKeyboardMarkup } from "../keyboard";

export interface EditMessageText {
	chat_id?: number | string;
	message_id?: number;
	inline_message_id?: string;
	text: string;
	parse_mode?: ParseMode;
	entities?: MessageEntity[];
	disable_web_page_preview?: boolean;
	reply_markup?: InlineKeyboardMarkup;
}
