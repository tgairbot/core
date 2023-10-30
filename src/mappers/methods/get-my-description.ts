import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class GetMyDescriptionMapper {
	static toTelegram(
		options: TgAirBot.GetMyDescription,
	): Telegram.GetMyDescription {
		const entity: Telegram.GetMyDescription = {
			language_code: options.languageCode,
		};

		return RemoveUndefinedKeysFromObject<Telegram.GetMyDescription>(entity);
	}
}
