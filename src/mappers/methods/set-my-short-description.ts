import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class SetMyShortDescriptionMapper {
	static toTelegram(
		options: TgAirBot.SetMyShortDescription,
	): Telegram.SetMyShortDescription {
		const entity: Telegram.SetMyShortDescription = {
			short_description: options.shortDescription,
			language_code: options.languageCode,
		};

		return RemoveUndefinedKeysFromObject<Telegram.SetMyShortDescription>(
			entity,
		);
	}
}
