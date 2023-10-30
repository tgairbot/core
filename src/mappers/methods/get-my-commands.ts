import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { BotCommandScopeMapper } from "../bot-command";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class GetMyCommandsMapper {
	static toTelegram(options: TgAirBot.GetMyCommands): Telegram.GetMyCommands {
		const entity: Telegram.GetMyCommands = {
			scope: options.scope
				? BotCommandScopeMapper.toTelegram(options.scope)
				: undefined,
			language_code: options.languageCode,
		};

		return RemoveUndefinedKeysFromObject<Telegram.GetMyCommands>(entity);
	}
}
