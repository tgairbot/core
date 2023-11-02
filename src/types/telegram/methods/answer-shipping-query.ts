import { ShippingOption } from "../payments/shipping-option";

export interface AnswerShippingQuery {
	shipping_query_id: string;
	ok: boolean;
	shipping_options?: ShippingOption[];
	error_message?: string;
}
