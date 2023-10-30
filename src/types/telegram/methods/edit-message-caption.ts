import { MessageEntity, ParseMode } from "../message";
import { InlineKeyboardMarkup } from "../keyboard";

export interface EditMessageCaption {
	chat_id?: number | string;
	message_id?: number;
	inline_message_id?: string;
	caption: string;
	parse_mode?: ParseMode;
	caption_entities?: MessageEntity[];
	reply_markup?: InlineKeyboardMarkup;
}
