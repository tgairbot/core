import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import * as TgAirBot from "../../types/tgairbot";
import * as Telegram from "../../types/telegram";
import { ReplyMarkupMapper } from "../reply-markup";

export class SetStickerEmojiListMapper {
	static toTelegram(
		options: TgAirBot.SetStickerEmojiList,
	): Telegram.SetStickerEmojiList {
		const entity: Telegram.SetStickerEmojiList = {
			sticker: options.sticker,
			emoji_list: options.emojiList,
		};

		return RemoveUndefinedKeysFromObject<Telegram.SetStickerEmojiList>(
			entity,
		);
	}
}
