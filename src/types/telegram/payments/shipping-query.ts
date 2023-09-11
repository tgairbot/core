import { ShippingAddress } from "../payment";
import { User } from "../user";

export interface ShippingQuery {
	id: string;
	from: User;
	invoice_payload: string;
	shipping_address: ShippingAddress;
}
