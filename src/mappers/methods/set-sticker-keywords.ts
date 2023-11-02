import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import * as TgAirBot from "../../types/tgairbot";
import * as Telegram from "../../types/telegram";
import { ReplyMarkupMapper } from "../reply-markup";

export class SetStickerKeywordsMapper {
	static toTelegram(
		options: TgAirBot.SetStickerKeywords,
	): Telegram.SetStickerKeywords {
		const entity: Telegram.SetStickerKeywords = {
			sticker: options.sticker,
			keywords: options.keywords,
		};

		return RemoveUndefinedKeysFromObject<Telegram.SetStickerKeywords>(
			entity,
		);
	}
}
