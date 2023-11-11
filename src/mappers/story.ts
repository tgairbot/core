import * as Telegram from "../types/telegram";
import * as TgAirBot from "../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../utils/remove-undefined-keys-from-object";

export class StoryMapper {
	static toTAB(options: Telegram.Story): TgAirBot.Story {
		const entity: TgAirBot.Story = {};

		return RemoveUndefinedKeysFromObject<TgAirBot.Story>(entity);
	}
}
