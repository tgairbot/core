import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import * as TgAirBot from "../../types/tgairbot";
import * as Telegram from "../../types/telegram";
import { PassportElementErrorMapper } from "../passport/passport-element-error";

export class SetPassportDataErrorsMapper {
	static toTelegram(
		options: TgAirBot.SetPassportDataErrors,
	): Telegram.SetPassportDataErrors {
		const entity: Telegram.SetPassportDataErrors = {
			user_id: options.userId,
			errors: options.errors.map(PassportElementErrorMapper.toTelegram),
		};

		return RemoveUndefinedKeysFromObject<Telegram.SetPassportDataErrors>(
			entity,
		);
	}
}
