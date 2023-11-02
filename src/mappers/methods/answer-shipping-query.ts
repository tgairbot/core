import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import { ShippingOptionMapper } from "../payments/shipping-option";

export class AnswerShippingQueryMapper {
	static toTelegram(
		options: TgAirBot.AnswerShippingQuery,
	): Telegram.AnswerShippingQuery {
		const entity: Telegram.AnswerShippingQuery = {
			shipping_query_id: options.shippingQueryId,
			shipping_options: options.shippingOptions
				? options.shippingOptions.map(ShippingOptionMapper.toTelegram)
				: undefined,
			error_message: options.errorMessage,
			ok: options.ok,
		};

		return RemoveUndefinedKeysFromObject<Telegram.AnswerShippingQuery>(
			entity,
		);
	}
}
