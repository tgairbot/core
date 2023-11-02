import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import * as TgAirBot from "../../types/tgairbot";
import * as Telegram from "../../types/telegram";
import { ReplyMarkupMapper } from "../reply-markup";

export class GetStickerSetMapper {
	static toTelegram(options: TgAirBot.GetStickerSet): Telegram.GetStickerSet {
		const entity: Telegram.GetStickerSet = {
			name: options.name,
		};

		return RemoveUndefinedKeysFromObject<Telegram.GetStickerSet>(entity);
	}
}
