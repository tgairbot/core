import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class SetMyDescriptionMapper {
	static toTelegram(
		options: TgAirBot.SetMyDescription,
	): Telegram.SetMyDescription {
		const entity: Telegram.SetMyDescription = {
			description: options.description,
			language_code: options.languageCode,
		};

		return RemoveUndefinedKeysFromObject<Telegram.SetMyDescription>(entity);
	}
}
