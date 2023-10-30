import * as Telegram from "../types/telegram";
import * as TgAirBot from "../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../utils/remove-undefined-keys-from-object";

export class BotCommandMapper {
	static toTAB(options: Telegram.BotCommand): TgAirBot.BotCommand {
		const entity: TgAirBot.BotCommand = {
			command: options.command,
			description: options.description,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.BotCommand>(entity);
	}

	static toTelegram(options: TgAirBot.BotCommand): Telegram.BotCommand {
		const entity: Telegram.BotCommand = {
			command: options.command,
			description: options.description,
		};

		return RemoveUndefinedKeysFromObject<Telegram.BotCommand>(entity);
	}
}

export class BotCommandScopeMapper {
	static toTAB(options: Telegram.BotCommandScope): TgAirBot.BotCommandScope {
		switch (options.type) {
			case "all_chat_administrators":
				return BotCommandScopeMapper.allChatAdministratorsToTAB(
					options,
				);
			case "all_group_chats":
				return BotCommandScopeMapper.allGroupsChatsToTAB(options);
			case "all_private_chats":
				return BotCommandScopeMapper.allPrivateChatsToTAB(options);
			case "chat":
				return BotCommandScopeMapper.chatToTAB(options);
			case "chat_administrators":
				return BotCommandScopeMapper.chatAdministratorsToTAB(options);
			case "chat_member":
				return BotCommandScopeMapper.chatMemberToTAB(options);
			case "default":
				return BotCommandScopeMapper.defaultToTAB(options);
		}
	}

	static toTelegram(
		options: TgAirBot.BotCommandScope,
	): Telegram.BotCommandScope {
		switch (options.type) {
			case "all_chat_administrators":
				return BotCommandScopeMapper.allChatAdministratorsToTelegram(
					options,
				);
			case "all_group_chats":
				return BotCommandScopeMapper.allGroupsChatsToTelegram(options);
			case "all_private_chats":
				return BotCommandScopeMapper.allPrivateChatsToTelegram(options);
			case "chat":
				return BotCommandScopeMapper.chatToTelegram(options);
			case "chat_administrators":
				return BotCommandScopeMapper.chatAdministratorsToTelegram(
					options,
				);
			case "chat_member":
				return BotCommandScopeMapper.chatMemberToTelegram(options);
			case "default":
				return BotCommandScopeMapper.defaultToTelegram(options);
		}
	}

	static defaultToTAB(
		options: Telegram.BotCommandScopeDefault,
	): TgAirBot.BotCommandScopeDefault {
		const entity: TgAirBot.BotCommandScopeDefault = {
			type: options.type,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.BotCommandScopeDefault>(
			entity,
		);
	}

	static defaultToTelegram(
		options: TgAirBot.BotCommandScopeDefault,
	): Telegram.BotCommandScopeDefault {
		const entity: Telegram.BotCommandScopeDefault = {
			type: options.type,
		};

		return RemoveUndefinedKeysFromObject<Telegram.BotCommandScopeDefault>(
			entity,
		);
	}

	static allPrivateChatsToTAB(
		options: Telegram.BotCommandScopeAllPrivateChats,
	): TgAirBot.BotCommandScopeAllPrivateChats {
		const entity: TgAirBot.BotCommandScopeAllPrivateChats = {
			type: options.type,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.BotCommandScopeAllPrivateChats>(
			entity,
		);
	}

	static allPrivateChatsToTelegram(
		options: TgAirBot.BotCommandScopeAllPrivateChats,
	): Telegram.BotCommandScopeAllPrivateChats {
		const entity: Telegram.BotCommandScopeAllPrivateChats = {
			type: options.type,
		};

		return RemoveUndefinedKeysFromObject<Telegram.BotCommandScopeAllPrivateChats>(
			entity,
		);
	}

	static allGroupsChatsToTAB(
		options: Telegram.BotCommandScopeAllGroupChats,
	): TgAirBot.BotCommandScopeAllGroupChats {
		const entity: TgAirBot.BotCommandScopeAllGroupChats = {
			type: options.type,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.BotCommandScopeAllGroupChats>(
			entity,
		);
	}

	static allGroupsChatsToTelegram(
		options: TgAirBot.BotCommandScopeAllGroupChats,
	): Telegram.BotCommandScopeAllGroupChats {
		const entity: Telegram.BotCommandScopeAllGroupChats = {
			type: options.type,
		};

		return RemoveUndefinedKeysFromObject<Telegram.BotCommandScopeAllGroupChats>(
			entity,
		);
	}

	static allChatAdministratorsToTAB(
		options: Telegram.BotCommandScopeAllChatAdministrators,
	): TgAirBot.BotCommandScopeAllChatAdministrators {
		const entity: TgAirBot.BotCommandScopeAllChatAdministrators = {
			type: options.type,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.BotCommandScopeAllChatAdministrators>(
			entity,
		);
	}

	static allChatAdministratorsToTelegram(
		options: TgAirBot.BotCommandScopeAllChatAdministrators,
	): Telegram.BotCommandScopeAllChatAdministrators {
		const entity: Telegram.BotCommandScopeAllChatAdministrators = {
			type: options.type,
		};

		return RemoveUndefinedKeysFromObject<Telegram.BotCommandScopeAllChatAdministrators>(
			entity,
		);
	}

	static chatToTAB(
		options: Telegram.BotCommandScopeChat,
	): TgAirBot.BotCommandScopeChat {
		const entity: TgAirBot.BotCommandScopeChat = {
			type: options.type,
			chatId: options.chat_id,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.BotCommandScopeChat>(
			entity,
		);
	}

	static chatToTelegram(
		options: TgAirBot.BotCommandScopeChat,
	): Telegram.BotCommandScopeChat {
		const entity: Telegram.BotCommandScopeChat = {
			type: options.type,
			chat_id: options.chatId,
		};

		return RemoveUndefinedKeysFromObject<Telegram.BotCommandScopeChat>(
			entity,
		);
	}

	static chatAdministratorsToTAB(
		options: Telegram.BotCommandScopeChatAdministrators,
	): TgAirBot.BotCommandScopeChatAdministrators {
		const entity: TgAirBot.BotCommandScopeChatAdministrators = {
			type: options.type,
			chatId: options.chat_id,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.BotCommandScopeChatAdministrators>(
			entity,
		);
	}

	static chatAdministratorsToTelegram(
		options: TgAirBot.BotCommandScopeChatAdministrators,
	): Telegram.BotCommandScopeChatAdministrators {
		const entity: Telegram.BotCommandScopeChatAdministrators = {
			type: options.type,
			chat_id: options.chatId,
		};

		return RemoveUndefinedKeysFromObject<Telegram.BotCommandScopeChatAdministrators>(
			entity,
		);
	}

	static chatMemberToTAB(
		options: Telegram.BotCommandScopeChatMember,
	): TgAirBot.BotCommandScopeChatMember {
		const entity: TgAirBot.BotCommandScopeChatMember = {
			chatId: options.chat_id,
			type: options.type,
			userId: options.user_id,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.BotCommandScopeChatMember>(
			entity,
		);
	}

	static chatMemberToTelegram(
		options: TgAirBot.BotCommandScopeChatMember,
	): Telegram.BotCommandScopeChatMember {
		const entity: Telegram.BotCommandScopeChatMember = {
			chat_id: options.chatId,
			type: options.type,
			user_id: options.userId,
		};

		return RemoveUndefinedKeysFromObject<Telegram.BotCommandScopeChatMember>(
			entity,
		);
	}
}

export class BotNameMapper {
	static toTelegram(options: TgAirBot.BotName): Telegram.BotName {
		const entity: TgAirBot.BotName = {
			name: options.name,
		};

		return RemoveUndefinedKeysFromObject<Telegram.BotName>(entity);
	}

	static toTAB(options: Telegram.BotName): TgAirBot.BotName {
		const entity: TgAirBot.BotName = {
			name: options.name,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.BotName>(entity);
	}
}

export class BotDescriptionMapper {
	static toTelegram(
		options: TgAirBot.BotDescription,
	): Telegram.BotDescription {
		const entity: Telegram.BotDescription = {
			description: options.description,
		};

		return RemoveUndefinedKeysFromObject<Telegram.BotDescription>(entity);
	}

	static toTAB(options: Telegram.BotDescription): TgAirBot.BotDescription {
		const entity: TgAirBot.BotDescription = {
			description: options.description,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.BotDescription>(entity);
	}
}

export class BotShortDescriptionMapper {
	static toTelegram(
		options: TgAirBot.BotShortDescription,
	): Telegram.BotShortDescription {
		const entity: Telegram.BotShortDescription = {
			short_description: options.shortDescription,
		};

		return RemoveUndefinedKeysFromObject<Telegram.BotShortDescription>(
			entity,
		);
	}

	static toTAB(
		options: Telegram.BotShortDescription,
	): TgAirBot.BotShortDescription {
		const entity: TgAirBot.BotShortDescription = {
			shortDescription: options.short_description,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.BotShortDescription>(
			entity,
		);
	}
}
