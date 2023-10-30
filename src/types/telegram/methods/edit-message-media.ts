import { InputMedia } from "../input";
import { InlineKeyboardMarkup } from "../keyboard";

export interface EditMessageMedia {
	chat_id?: number | string;
	message_id?: number;
	inline_message_id?: string;
	media: InputMedia;
	reply_markup?: InlineKeyboardMarkup;
}
