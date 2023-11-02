import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import { ReplyMarkupMapper } from "../reply-markup";

export class InlineQueryResultsButtonMapper {
	static toTAB(
		options: Telegram.InlineQueryResultsButton,
	): TgAirBot.InlineQueryResultsButton {
		const entity: TgAirBot.InlineQueryResultsButton = {
			text: options.text,
			startParameter: options.start_parameter,
			webApp: options.web_app
				? ReplyMarkupMapper.webAppInfoToTAB(options.web_app)
				: undefined,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.InlineQueryResultsButton>(
			entity,
		);
	}

	static toTelegram(
		options: TgAirBot.InlineQueryResultsButton,
	): Telegram.InlineQueryResultsButton {
		const entity: Telegram.InlineQueryResultsButton = {
			text: options.text,
			start_parameter: options.startParameter,
			web_app: options.webApp
				? ReplyMarkupMapper.webAppInfoToTelegram(options.webApp)
				: undefined,
		};

		return RemoveUndefinedKeysFromObject<Telegram.InlineQueryResultsButton>(
			entity,
		);
	}
}
