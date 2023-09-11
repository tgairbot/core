import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import { InlineQueryResultMapper } from "./inline-query-result";
import { InlineQueryResultsButtonMapper } from "./inline-query-results-button";

export class AnswerInlineQuery {
	static toTAB(
		options: Telegram.AnswerInlineQuery,
	): TgAirBot.AnswerInlineQuery {
		const entity: TgAirBot.AnswerInlineQuery = {
			inlineQueryId: options.inline_query_id,
			results: options.results.map(InlineQueryResultMapper.toTAB),
			button: options.button
				? InlineQueryResultsButtonMapper.toTAB(options.button)
				: undefined,
			cacheTime: options.cache_time,
			isPersonal: options.is_personal,
			nextOffset: options.next_offset,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.AnswerInlineQuery>(
			entity,
		);
	}
}
