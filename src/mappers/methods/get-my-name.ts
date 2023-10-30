import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class GetMyNameMapper {
	static toTelegram(options: TgAirBot.GetMyName): Telegram.GetMyName {
		const entity: Telegram.GetMyName = {
			language_code: options.languageCode,
		};

		return RemoveUndefinedKeysFromObject<Telegram.GetMyName>(entity);
	}
}
