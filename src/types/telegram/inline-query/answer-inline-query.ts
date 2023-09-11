import { InlineQueryResult } from "./inline-query-result";
import { InlineQueryResultsButton } from "./inline-query-results-button";

export interface AnswerInlineQuery {
	inline_query_id: string;
	results: InlineQueryResult[];
	cache_time?: number;
	is_personal?: boolean;
	next_offset?: string;
	button?: InlineQueryResultsButton;
}
