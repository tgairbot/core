import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import { LabeledPriceMapper } from "./labeled-price";

export class ShippingOptionMapper {
	static toTelegram(
		options: TgAirBot.ShippingOption,
	): Telegram.ShippingOption {
		const entity: Telegram.ShippingOption = {
			id: options.id,
			prices: options.prices.map(LabeledPriceMapper.toTelegram),
			title: options.title,
		};

		return RemoveUndefinedKeysFromObject<Telegram.ShippingOption>(entity);
	}
}
