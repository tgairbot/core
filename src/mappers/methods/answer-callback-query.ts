import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class AnswerCallbackQueryMapper {
	static toTelegram(
		options: TgAirBot.AnswerCallbackQuery,
	): Telegram.AnswerCallbackQuery {
		const entity: Telegram.AnswerCallbackQuery = {
			callback_query_id: options.callbackQueryId,
			show_alert: options.showAlert,
			cache_time: options.cacheTime,
			url: options.url,
			text: options.text,
		};

		return RemoveUndefinedKeysFromObject<Telegram.AnswerCallbackQuery>(
			entity,
		);
	}
}
