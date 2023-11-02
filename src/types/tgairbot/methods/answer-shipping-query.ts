import { ShippingOption } from "../payments/shipping-option";

export interface AnswerShippingQuery {
	shippingQueryId: string;
	ok: boolean;
	shippingOptions?: ShippingOption[];
	errorMessage?: string;
}
