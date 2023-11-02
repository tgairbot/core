import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import { InlineQueryResultMapper } from "./inline-query-result";

export class AnswerWebAppQueryMapper {
	static toTAB(
		options: Telegram.AnswerWebAppQuery,
	): TgAirBot.AnswerWebAppQuery {
		const entity: TgAirBot.AnswerWebAppQuery = {
			result: InlineQueryResultMapper.toTAB(options.result),
			webAppQueryId: options.web_app_query_id,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.AnswerWebAppQuery>(
			entity,
		);
	}

	static toTelegram(
		options: TgAirBot.AnswerWebAppQuery,
	): Telegram.AnswerWebAppQuery {
		const entity: Telegram.AnswerWebAppQuery = {
			result: InlineQueryResultMapper.toTelegram(options.result),
			web_app_query_id: options.webAppQueryId,
		};

		return RemoveUndefinedKeysFromObject<Telegram.AnswerWebAppQuery>(
			entity,
		);
	}
}
