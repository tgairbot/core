import { OrderInfo } from "../payment";
import { User } from "../user";

export interface PreCheckoutQuery {
	id: string;
	from: User;
	currency: string;
	totalAmount: number;
	invoicePayload: string;
	shippingOptionId?: string;
	orderInfo?: OrderInfo;
}
