import { WebAppInfo } from "./keyboard";

export type MenuButton =
	| MenuButtonCommands
	| MenuButtonWebApp
	| MenuButtonDefault;

export interface MenuButtonCommands {
	type: "commands";
}

export interface MenuButtonWebApp {
	type: "web_app";
	text: string;
	webApp: WebAppInfo;
}

export interface MenuButtonDefault {
	type: "default";
}

export interface ResponseParameters {
	migrateToChatId?: number;
	retryAfter?: number;
}
