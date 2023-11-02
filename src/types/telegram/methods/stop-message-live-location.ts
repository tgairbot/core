import { InlineKeyboardMarkup } from "../keyboard";

export interface StopMessageLiveLocation {
	chat_id?: number | string;
	message_id?: number;
	inline_message_id?: string;
	reply_markup?: InlineKeyboardMarkup;
}
