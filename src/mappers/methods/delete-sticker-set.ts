import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import * as TgAirBot from "../../types/tgairbot";
import * as Telegram from "../../types/telegram";

export class DeleteStickerSetMapper {
	static toTelegram(
		options: TgAirBot.DeleteStickerSet,
	): Telegram.DeleteStickerSet {
		const entity: Telegram.DeleteStickerSet = {
			name: options.name,
		};

		return RemoveUndefinedKeysFromObject<Telegram.DeleteStickerSet>(entity);
	}
}
