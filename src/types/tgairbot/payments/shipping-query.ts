import { ShippingAddress } from "../payment";
import { User } from "../user";

export interface ShippingQuery {
	id: string;
	from: User;
	invoicePayload: string;
	shippingAddress: ShippingAddress;
}
