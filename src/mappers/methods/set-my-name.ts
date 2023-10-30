import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class SetMyNameMapper {
	static toTelegram(options: TgAirBot.SetMyName): Telegram.SetMyName {
		const entity: Telegram.SetMyName = {
			name: options.name,
			language_code: options.languageCode,
		};

		return RemoveUndefinedKeysFromObject<Telegram.SetMyName>(entity);
	}
}
