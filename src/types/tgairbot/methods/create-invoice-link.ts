import { LabeledPrice } from "../payments/labeled-price";

export interface CreateInvoiceLink {
	title: string;
	description: string;
	payload: string;
	provider_token: string;
	currency: string;
	prices: LabeledPrice[];
	maxTipAmount?: number;
	suggestedTipAmounts: number[];
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
