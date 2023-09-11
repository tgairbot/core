import { WebAppInfo } from "../keyboard";

export interface InlineQueryResultsButton {
	text: string;
	webApp?: WebAppInfo;
	startParameter?: string;
}
