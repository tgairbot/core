import { InlineQueryResult } from "./inline-query-result";

export interface AnswerWebAppQuery {
	webAppQueryId: string;
	result: InlineQueryResult;
}
