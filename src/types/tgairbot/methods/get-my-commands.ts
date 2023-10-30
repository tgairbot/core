import { BotCommandScope } from "../bot-command";

export interface GetMyCommands {
	scope?: BotCommandScope;
	languageCode?: string;
}
