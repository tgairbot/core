import { WebAppInfo } from "../keyboard";

export interface InlineQueryResultsButton {
	text: string;
	web_app?: WebAppInfo;
	start_parameter?: string;
}
