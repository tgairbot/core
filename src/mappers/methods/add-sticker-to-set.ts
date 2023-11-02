import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import * as TgAirBot from "../../types/tgairbot";
import * as Telegram from "../../types/telegram";
import { StickerMapper } from "../sticker";

export class AddStickerToSetMapper {
	static toTelegram(
		options: TgAirBot.AddStickerToSet,
	): Telegram.AddStickerToSet {
		const entity: Telegram.AddStickerToSet = {
			user_id: options.userId,
			sticker: StickerMapper.inputStickerToTelegram(options.sticker),
			name: options.name,
		};

		return RemoveUndefinedKeysFromObject<Telegram.AddStickerToSet>(entity);
	}
}
