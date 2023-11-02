import { InlineKeyboardMarkup } from "../keyboard";

export interface SendGame {
	chat_id: number | string;
	message_thread_id?: number;
	game_short_name: string;
	disable_notification?: boolean;
	protect_content?: boolean;
	reply_to_message_id?: number;
	allow_sending_without_reply?: boolean;
	reply_markup?: InlineKeyboardMarkup;
}
