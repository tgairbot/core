import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import * as TgAirBot from "../../types/tgairbot";
import * as Telegram from "../../types/telegram";
import { ReplyMarkupMapper } from "../reply-markup";

export class SetCustomEmojiStickerSetThumbnailMapper {
	static toTelegram(
		options: TgAirBot.SetCustomEmojiStickerSetThumbnail,
	): Telegram.SetCustomEmojiStickerSetThumbnail {
		const entity: Telegram.SetCustomEmojiStickerSetThumbnail = {
			name: options.name,
			custom_emoji_id: options.customEmojiId,
		};

		return RemoveUndefinedKeysFromObject<Telegram.SetCustomEmojiStickerSetThumbnail>(
			entity,
		);
	}
}
