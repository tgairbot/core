import { InlineKeyboardMarkup } from "../keyboard";

export interface StopPoll {
	chat_id?: number | string;
	message_id: number;
	reply_markup?: InlineKeyboardMarkup;
}
