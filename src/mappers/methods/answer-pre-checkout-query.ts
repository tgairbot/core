import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class AnswerPreCheckoutQueryMapper {
	static toTelegram(
		options: TgAirBot.AnswerPreCheckoutQuery,
	): Telegram.AnswerPreCheckoutQuery {
		const entity: Telegram.AnswerPreCheckoutQuery = {
			pre_checkout_query_id: options.preCheckoutQueryId,
			error_message: options.errorMessage,
			ok: options.ok,
		};

		return RemoveUndefinedKeysFromObject<Telegram.AnswerPreCheckoutQuery>(
			entity,
		);
	}
}
