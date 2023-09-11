import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import { PaymentMapper } from "../payment";
import { UserMapper } from "../user";

export class PreCheckoutQueryMapper {
	static toTAB(
		options: Telegram.PreCheckoutQuery,
	): TgAirBot.PreCheckoutQuery {
		const entity: TgAirBot.PreCheckoutQuery = {
			id: options.id,
			from: UserMapper.toTAB(options.from),
			currency: options.currency,
			invoicePayload: options.invoice_payload,
			totalAmount: options.total_amount,
			shippingOptionId: options.shipping_option_id,
			orderInfo: options.order_info
				? PaymentMapper.orderInfoToTAB(options.order_info)
				: undefined,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.PreCheckoutQuery>(entity);
	}
}
