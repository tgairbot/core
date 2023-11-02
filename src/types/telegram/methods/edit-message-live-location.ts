import { InlineKeyboardMarkup } from "../keyboard";

export interface EditMessageLiveLocation {
	chat_id?: number | string;
	message_id?: number;
	inline_message_id?: string;
	latitude: string;
	longitude: string;
	horizontal_accuracy?: number;
	heading?: number;
	proximity_alert_radius?: number;
	reply_markup?: InlineKeyboardMarkup;
}
