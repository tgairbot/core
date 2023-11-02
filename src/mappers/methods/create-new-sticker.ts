import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import * as TgAirBot from "../../types/tgairbot";
import * as Telegram from "../../types/telegram";
import { ReplyMarkupMapper } from "../reply-markup";
import { StickerMapper } from "../sticker";

export class CreateNewStickerMapper {
	static toTelegram(
		options: TgAirBot.CreateNewSticker,
	): Telegram.CreateNewSticker {
		const entity: Telegram.CreateNewSticker = {
			user_id: options.userId,
			sticker_format: options.stickerFormat,
			sticker_type: options.stickerType,
			needs_repainting: options.needsRepainting,
			name: options.name,
			title: options.title,
			stickers: options.stickers.map(
				StickerMapper.inputStickerToTelegram,
			),
		};

		return RemoveUndefinedKeysFromObject<Telegram.CreateNewSticker>(entity);
	}
}
