import * as Telegram from "../types/telegram";
import * as TgAirBot from "../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../utils/remove-undefined-keys-from-object";
import { MessageMapper } from "./message";
import { UserMapper } from "./user";

export class CallbackQueryMapper {
	static toTAB(options: Telegram.CallbackQuery): TgAirBot.CallbackQuery {
		const entity: TgAirBot.CallbackQuery = {
			chatInstance: options.chat_instance,
			data: options.data,
			from: UserMapper.toTAB(options.from),
			id: options.id,
			gameShortName: options.game_short_name,
			inlineMessageId: options.inline_message_id,
			message: options.message
				? MessageMapper.toTAB(options.message)
				: undefined,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.CallbackQuery>(entity);
	}
}
