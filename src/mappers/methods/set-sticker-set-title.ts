import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import * as TgAirBot from "../../types/tgairbot";
import * as Telegram from "../../types/telegram";
import { ReplyMarkupMapper } from "../reply-markup";
import { StickerMapper } from "../sticker";

export class SetStickerSetTitleMapper {
	static toTelegram(
		options: TgAirBot.SetStickerSetTitle,
	): Telegram.SetStickerSetTitle {
		const entity: Telegram.SetStickerSetTitle = {
			title: options.title,
			name: options.name,
		};

		return RemoveUndefinedKeysFromObject<Telegram.SetStickerSetTitle>(
			entity,
		);
	}
}
