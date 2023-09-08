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
	web_app: WebAppInfo;
}

export interface MenuButtonDefault {
	type: "default";
}

export interface ResponseParameters {
	migrate_to_chat_id?: number;
	retry_after?: number;
}
