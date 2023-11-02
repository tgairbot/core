import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import * as TgAirBot from "../../types/tgairbot";
import * as Telegram from "../../types/telegram";
import { ReplyMarkupMapper } from "../reply-markup";
import { StickerMapper } from "../sticker";

export class SetStickerSetThumbnailMapper {
	static toTelegram(
		options: TgAirBot.SetStickerSetThumbnail,
	): Telegram.SetStickerSetThumbnail {
		const entity: Telegram.SetStickerSetThumbnail = {
			user_id: options.userId,
			name: options.name,
			thumbnail: options.thumbnail,
		};

		const parse =
			RemoveUndefinedKeysFromObject<Telegram.SetStickerSetThumbnail>(
				entity,
			);

		if (options.thumbnail && typeof options.thumbnail !== "string") {
			parse.thumbnail = options.thumbnail;
		}

		return parse;
	}
}
