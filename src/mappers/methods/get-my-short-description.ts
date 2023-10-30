import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class GetMyShortDescriptionMapper {
	static toTelegram(
		options: TgAirBot.GetMyShortDescription,
	): Telegram.GetMyShortDescription {
		const entity: Telegram.GetMyShortDescription = {
			language_code: options.languageCode,
		};

		return RemoveUndefinedKeysFromObject<Telegram.GetMyShortDescription>(
			entity,
		);
	}
}
