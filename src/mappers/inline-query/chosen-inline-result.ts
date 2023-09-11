import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import { LocationMapper } from "../location";
import { UserMapper } from "../user";

export class ChosenInlineResultMapper {
	static toTAB(
		options: Telegram.ChosenInlineResult,
	): TgAirBot.ChosenInlineResult {
		const entity: TgAirBot.ChosenInlineResult = {
			from: UserMapper.toTAB(options.from),
			resultId: options.result_id,
			inlineMessageId: options.inline_message_id,
			location: options.location
				? LocationMapper.toTAB(options.location)
				: undefined,
			query: options.query,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.ChosenInlineResult>(
			entity,
		);
	}
}
