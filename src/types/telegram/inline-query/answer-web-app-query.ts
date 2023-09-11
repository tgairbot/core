import { InlineQueryResult } from "./inline-query-result";

export interface AnswerWebAppQuery {
	web_app_query_id: string;
	result: InlineQueryResult;
}
