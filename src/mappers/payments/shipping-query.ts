import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import { PaymentMapper } from "../payment";
import { UserMapper } from "../user";

export class ShippingQueryMapper {
	static toTAB(options: Telegram.ShippingQuery): TgAirBot.ShippingQuery {
		const entity: TgAirBot.ShippingQuery = {
			from: UserMapper.toTAB(options.from),
			id: options.id,
			invoicePayload: options.invoice_payload,
			shippingAddress: PaymentMapper.shippingAddressToTAB(
				options.shipping_address,
			),
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.ShippingQuery>(entity);
	}
}
