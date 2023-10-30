import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { BotCommandScopeMapper } from "../bot-command";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class DeleteMyCommandsMapper {
	static toTelegram(
		options: TgAirBot.DeleteMyCommands,
	): Telegram.DeleteMyCommands {
		const entity: Telegram.DeleteMyCommands = {
			language_code: options.languageCode,
			scope: options.scope
				? BotCommandScopeMapper.toTelegram(options.scope)
				: undefined,
		};

		return RemoveUndefinedKeysFromObject<Telegram.DeleteMyCommands>(entity);
	}
}
