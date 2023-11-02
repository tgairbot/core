import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import * as TgAirBot from "../../types/tgairbot";
import * as Telegram from "../../types/telegram";
import { ReplyMarkupMapper } from "../reply-markup";

export class SetStickerPositionInSetMapper {
	static toTelegram(
		options: TgAirBot.SetStickerPositionInSet,
	): Telegram.SetStickerPositionInSet {
		const entity: Telegram.SetStickerPositionInSet = {
			sticker: options.sticker,
			position: options.position,
		};

		return RemoveUndefinedKeysFromObject<Telegram.SetStickerPositionInSet>(
			entity,
		);
	}
}
