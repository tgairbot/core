import { LabeledPrice } from "../payments/labeled-price";
import { InlineKeyboardMarkup } from "../keyboard";

export interface SendInvoice {
	chat_id: number | string;
	message_thread_id?: number;
	title: string;
	description: string;
	payload: string;
	provider_token: string;
	currency: string;
	prices: LabeledPrice[];
	max_tip_amount?: number;
	suggested_tip_amounts?: number[];
	start_parameter?: string;
	provider_data?: string;
	photo_url?: string;
	photo_size?: number;
	photo_width?: number;
	photo_height?: number;
	need_name?: boolean;
	need_phone_number?: boolean;
	need_email?: boolean;
	need_shipping_address?: boolean;
	send_phone_number_to_provider?: boolean;
	send_email_to_provider?: boolean;
	is_flexible?: boolean;
	disable_notification?: boolean;
	protect_content?: boolean;
	reply_to_message_id?: number;
	allow_sending_without_reply?: boolean;
	reply_markup?: InlineKeyboardMarkup;
}
