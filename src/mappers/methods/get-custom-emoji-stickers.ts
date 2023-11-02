import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import * as TgAirBot from "../../types/tgairbot";
import * as Telegram from "../../types/telegram";

export class GetCustomEmojiStickersMapper {
	static toTelegram(
		options: TgAirBot.GetCustomEmojiStickers,
	): Telegram.GetCustomEmojiStickers {
		const entity: Telegram.GetCustomEmojiStickers = {
			custom_emoji_ids: options.customEmojiIds,
		};

		return RemoveUndefinedKeysFromObject<Telegram.GetCustomEmojiStickers>(
			entity,
		);
	}
}
