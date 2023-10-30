import { BotCommand, BotCommandScope } from "../bot-command";

export interface SetMyCommands {
	commands: BotCommand[];
	scope?: BotCommandScope;
	languageCode?: string;
}
