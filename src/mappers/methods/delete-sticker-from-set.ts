import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import * as TgAirBot from "../../types/tgairbot";
import * as Telegram from "../../types/telegram";
import { ReplyMarkupMapper } from "../reply-markup";

export class DeleteStickerFromSetMapper {
	static toTelegram(
		options: TgAirBot.DeleteStickerFromSet,
	): Telegram.DeleteStickerFromSet {
		const entity: Telegram.DeleteStickerFromSet = {
			sticker: options.sticker,
		};

		return RemoveUndefinedKeysFromObject<Telegram.DeleteStickerFromSet>(
			entity,
		);
	}
}
