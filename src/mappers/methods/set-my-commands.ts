import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import { BotCommandMapper, BotCommandScopeMapper } from "../bot-command";

export class SetMyCommandsMapper {
	static toTelegram(options: TgAirBot.SetMyCommands): Telegram.SetMyCommands {
		const entity: Telegram.SetMyCommands = {
			commands: options.commands.map(BotCommandMapper.toTelegram),
			scope: options.scope
				? BotCommandScopeMapper.toTelegram(options.scope)
				: undefined,
			language_code: options.languageCode,
		};

		return RemoveUndefinedKeysFromObject<Telegram.SetMyCommands>(entity);
	}
}
