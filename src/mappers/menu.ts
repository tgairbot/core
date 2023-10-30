import * as TgAirBot from "../types/tgairbot";
import * as Telegram from "../types/telegram";
import { RemoveUndefinedKeysFromObject } from "../utils/remove-undefined-keys-from-object";
import { ReplyMarkupMapper } from "./reply-markup";

export class MenuButtonMapper {
	static toTelegram(options: TgAirBot.MenuButton): Telegram.MenuButton {
		switch (options.type) {
			case "default":
				return MenuButtonMapper.defaultToTelegram(options);
			case "commands":
				return MenuButtonMapper.commandsToTelegram(options);
			case "web_app":
				return MenuButtonMapper.webAppToTelegram(options);
		}
	}

	static toTAB(options: Telegram.MenuButton): TgAirBot.MenuButton {
		switch (options.type) {
			case "web_app":
				return MenuButtonMapper.webAppToTAB(options);
			case "commands":
				return MenuButtonMapper.commandsToTAB(options);
			case "default":
				return MenuButtonMapper.defaultToTAB(options);
		}
	}

	static defaultToTelegram(
		options: TgAirBot.MenuButtonDefault,
	): Telegram.MenuButtonDefault {
		const entity: Telegram.MenuButtonDefault = {
			type: options.type,
		};

		return RemoveUndefinedKeysFromObject<Telegram.MenuButtonDefault>(
			entity,
		);
	}

	static defaultToTAB(
		options: Telegram.MenuButtonDefault,
	): TgAirBot.MenuButtonDefault {
		const entity: TgAirBot.MenuButtonDefault = {
			type: options.type,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.MenuButtonDefault>(
			entity,
		);
	}

	static commandsToTelegram(
		options: TgAirBot.MenuButtonCommands,
	): Telegram.MenuButtonCommands {
		const entity: Telegram.MenuButtonCommands = {
			type: options.type,
		};

		return RemoveUndefinedKeysFromObject<Telegram.MenuButtonCommands>(
			entity,
		);
	}

	static commandsToTAB(
		options: Telegram.MenuButtonCommands,
	): TgAirBot.MenuButtonCommands {
		const entity: TgAirBot.MenuButtonCommands = {
			type: options.type,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.MenuButtonCommands>(
			entity,
		);
	}

	static webAppToTelegram(
		options: TgAirBot.MenuButtonWebApp,
	): Telegram.MenuButtonWebApp {
		const entity: Telegram.MenuButtonWebApp = {
			type: options.type,
			web_app: ReplyMarkupMapper.webAppInfoToTelegram(options.webApp),
			text: options.text,
		};

		return RemoveUndefinedKeysFromObject<Telegram.MenuButtonWebApp>(entity);
	}

	static webAppToTAB(
		options: Telegram.MenuButtonWebApp,
	): TgAirBot.MenuButtonWebApp {
		const entity: TgAirBot.MenuButtonWebApp = {
			type: options.type,
			webApp: ReplyMarkupMapper.webAppInfoToTAB(options.web_app),
			text: options.text,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.MenuButtonWebApp>(entity);
	}
}
