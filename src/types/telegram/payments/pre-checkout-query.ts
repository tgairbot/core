import { OrderInfo } from "../payment";
import { User } from "../user";

export interface PreCheckoutQuery {
	id: string;
	from: User;
	currency: string;
	total_amount: number;
	invoice_payload: string;
	shipping_option_id?: string;
	order_info?: OrderInfo;
}
