import { MessageEntity, ParseMode } from "../message";
import { LabeledPrice } from "../payments/labeled-price";

export type InputMessageContent =
	| InputTextMessageContent
	| InputLocationMessageContent
	| InputVenueMessageContent
	| InputContactMessageContent
	| InputInvoiceMessageContent;

export interface InputTextMessageContent {
	message_text?: string;
	parse_mode?: ParseMode;
	entities?: MessageEntity[];
	disable_web_page_preview?: boolean;
}

export interface InputLocationMessageContent {
	latitude: number;
	longitude: number;
	horizontal_accuracy?: number;
	live_period?: number;
	heading?: number;
	proximity_alert_radius?: number;
}

export interface InputContactMessageContent {
	phone: string;
	first_name: string;
	last_name?: string;
	vcard?: string;
}

export interface InputVenueMessageContent {
	latitude: number;
	longitude: number;
	title: string;
	address: string;
	foursquare_id?: string;
	foursquare_type?: string;
	google_place_id?: string;
	google_place_type?: string;
}

export interface InputInvoiceMessageContent {
	title: string;
	description: string;
	payload: string;
	provider_token: string;
	currency: string;
	prices: LabeledPrice;
	max_tip_amount?: number;
	suggested_tip_amounts?: number[];
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
}
