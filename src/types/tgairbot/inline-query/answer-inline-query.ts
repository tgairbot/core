import { InlineQueryResult } from "./inline-query-result";
import { InlineQueryResultsButton } from "./inline-query-results-button";

export interface AnswerInlineQuery {
	inlineQueryId: string;
	results: InlineQueryResult[];
	cacheTime?: number;
	isPersonal?: boolean;
	nextOffset?: string;
	button?: InlineQueryResultsButton;
}
