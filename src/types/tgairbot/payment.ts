export interface Invoice {
	title: string;
	description: string;
	startParameter: string;
	currency: string;
	totalAmount: number;
}

export interface SuccessfulPayment {
	currency: string;
	totalAmount: number;
	invoicePayload: string;
	shippingOptionId?: string;
	orderInfo?: OrderInfo;
	telegramPaymentChargeId: string;
	providerPaymentChargeId: string;
}

export interface OrderInfo {
	name?: string;
	phoneNumber?: string;
	email?: string;
	shippingAddress?: ShippingAddress;
}

export interface ShippingAddress {
	countryCode: string;
	state: string;
	city: string;
	streetLine1: string;
	streetLine2: string;
	postCode: string;
}
