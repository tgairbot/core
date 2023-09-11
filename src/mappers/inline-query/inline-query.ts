import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import { LocationMapper } from "../location";
import { UserMapper } from "../user";

export class InlineQueryMapper {
	static toTAB(options: Telegram.InlineQuery): TgAirBot.InlineQuery {
		const entity: TgAirBot.InlineQuery = {
			from: UserMapper.toTAB(options.from),
			id: options.id,
			offset: options.offset,
			query: options.query,
			chatType: options.chat_type,
			location: options.location
				? LocationMapper.toTAB(options.location)
				: undefined,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.InlineQuery>(entity);
	}

	static toTelegram(options: TgAirBot.InlineQuery): Telegram.InlineQuery {
		const entity: Telegram.InlineQuery = {
			from: UserMapper.toTelegram(options.from),
			id: options.id,
			offset: options.offset,
			query: options.query,
			chat_type: options.chatType,
			location: options.location
				? LocationMapper.toTelegram(options.location)
				: undefined,
		};

		return RemoveUndefinedKeysFromObject<Telegram.InlineQuery>(entity);
	}
}
