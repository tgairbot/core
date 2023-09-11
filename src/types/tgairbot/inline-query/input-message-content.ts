import { ParseMode } from "../../telegram";
import { MessageEntity } from "../message";
import { LabeledPrice } from "../payments/labeled-price";

export type InputMessageContent =
	| InputTextMessageContent
	| InputLocationMessageContent
	| InputVenueMessageContent
	| InputContactMessageContent
	| InputInvoiceMessageContent;

export interface InputTextMessageContent {
	messageText?: string;
	parseMode?: ParseMode;
	entities?: MessageEntity[];
	disableWebPagePreview?: boolean;
}

export interface InputLocationMessageContent {
	latitude: number;
	longitude: number;
	horizontalAccuracy?: number;
	livePeriod?: number;
	heading?: number;
	proximityAlertRadius?: number;
}

export interface InputContactMessageContent {
	phone: string;
	firstName: string;
	lastName?: string;
	vcard?: string;
}

export interface InputVenueMessageContent {
	latitude: number;
	longitude: number;
	title: string;
	address: string;
	foursquareId?: string;
	foursquareType?: string;
	googlePlaceId?: string;
	googlePlaceType?: string;
}

export interface InputInvoiceMessageContent {
	title: string;
	description: string;
	payload: string;
	providerToken: string;
	currency: string;
	prices: LabeledPrice;
	maxTipAmount?: number;
	suggestedTipAmounts?: number[];
	providerData?: string;
	photoUrl?: string;
	photoSize?: number;
	photoWidth?: number;
	photoHeight?: number;
	needName?: boolean;
	needPhoneNumber?: boolean;
	needEmail?: boolean;
	needShippingAddress?: boolean;
	sendPhoneNumberToProvider?: boolean;
	sendEmailToProvider?: boolean;
	isFlexible?: boolean;
}
