import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class LabeledPriceMapper {
	static toTelegram(options: TgAirBot.LabeledPrice): Telegram.LabeledPrice {
		const entity: Telegram.LabeledPrice = {
			label: options.label,
			amount: options.amount,
		};

		return RemoveUndefinedKeysFromObject<Telegram.LabeledPrice>(entity);
	}
}
