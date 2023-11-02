import { LabeledPrice } from "../payments/labeled-price";
import { InlineKeyboardMarkup } from "../keyboard";

export interface SendInvoice {
	chatId: number | string;
	messageThreadId?: number;
	title: string;
	description: string;
	payload: string;
	providerToken: string;
	currency: string;
	prices: LabeledPrice[];
	maxTipAmount?: number;
	suggestedTipAmounts?: number[];
	startParameter?: string;
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
	disableNotification?: boolean;
	protectContent?: boolean;
	replyToMessageId?: number;
	allowSendingWithoutReply?: boolean;
	replyMarkup?: InlineKeyboardMarkup;
}
