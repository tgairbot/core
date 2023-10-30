export interface BotCommand {
	command: string;
	description: string;
}

export type BotCommandScope =
	| BotCommandScopeDefault
	| BotCommandScopeAllPrivateChats
	| BotCommandScopeAllGroupChats
	| BotCommandScopeAllChatAdministrators
	| BotCommandScopeChat
	| BotCommandScopeChatAdministrators
	| BotCommandScopeChatMember;

export interface BotCommandScopeDefault {
	type: "default";
}

export interface BotCommandScopeAllPrivateChats {
	type: "all_private_chats";
}

export interface BotCommandScopeAllGroupChats {
	type: "all_group_chats";
}

export interface BotCommandScopeAllChatAdministrators {
	type: "all_chat_administrators";
}

export interface BotCommandScopeChat {
	type: "chat";
	chatId: string | number;
}

export interface BotCommandScopeChatAdministrators {
	type: "chat_administrators";
	chatId: string | number;
}

export interface BotCommandScopeChatMember {
	type: "chat_member";
	chatId: string | number;
	userId: number;
}

export interface BotName {
	name: string;
}

export interface BotDescription {
	description: string;
}

export interface BotShortDescription {
	shortDescription: string;
}
