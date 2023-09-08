import * as Telegram from "../types/telegram";
import * as TgAirBot from "../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../utils/remove-undefined-keys-from-object";

export class PaymentMapper {
	static invoiceToTAB(invoice: Telegram.Invoice): TgAirBot.Invoice {
		const entity: TgAirBot.Invoice = {
			title: invoice.title,
			description: invoice.description,
			currency: invoice.currency,
			totalAmount: invoice.total_amount,
			startParameter: invoice.start_parameter,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.Invoice>(entity);
	}

	static successPaymentToTAB(
		successPayment: Telegram.SuccessfulPayment,
	): TgAirBot.SuccessfulPayment {
		const entity: TgAirBot.SuccessfulPayment = {
			totalAmount: successPayment.total_amount,
			currency: successPayment.currency,
			invoicePayload: successPayment.invoice_payload,
			shippingOptionId: successPayment.shipping_option_id,
			providerPaymentChargeId: successPayment.provider_payment_charge_id,
			telegramPaymentChargeId: successPayment.telegram_payment_charge_id,
			orderInfo: successPayment.order_info
				? PaymentMapper.orderInfoToTAB(successPayment.order_info)
				: undefined,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.SuccessfulPayment>(
			entity,
		);
	}

	static orderInfoToTAB(orderInfo: Telegram.OrderInfo): TgAirBot.OrderInfo {
		const entity: TgAirBot.OrderInfo = {
			name: orderInfo.name,
			email: orderInfo.email,
			phoneNumber: orderInfo.email,
			shippingAddress: orderInfo.shipping_address
				? PaymentMapper.shippingAddressToTAB(orderInfo.shipping_address)
				: undefined,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.OrderInfo>(entity);
	}

	static shippingAddressToTAB(
		address: Telegram.ShippingAddress,
	): TgAirBot.ShippingAddress {
		const entity: TgAirBot.ShippingAddress = {
			city: address.city,
			state: address.state,
			postCode: address.post_code,
			countryCode: address.country_code,
			streetLine1: address.street_line1,
			streetLine2: address.street_line2,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.ShippingAddress>(entity);
	}
}
