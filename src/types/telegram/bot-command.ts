export interface BotCommand {
	command: string;
	description: string;
}

export type BotCommandScope =
	| BotCommandScopeDefault
	| BotCommantScopeAllPrivateChats
	| BotCommandScopeAllGroupChats
	| BotCommandScopeAllChatAdministrators
	| BotCommandScopeChat
	| BotCommandScopeChatAdministrators
	| BotCommandScopeChatMember;

export interface BotCommandScopeDefault {
	type: "default";
}

export interface BotCommantScopeAllPrivateChats {
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
	chat_id: string | number;
}

export interface BotCommandScopeChatAdministrators {
	type: "chat_administrators";
	chat_id: string | number;
}

export interface BotCommandScopeChatMember {
	type: "chat_member";
	chat_id: string | number;
	user_id: number;
}

export interface BotName {
	name: string;
}
