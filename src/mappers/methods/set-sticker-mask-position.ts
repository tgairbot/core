import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import * as TgAirBot from "../../types/tgairbot";
import * as Telegram from "../../types/telegram";
import { ReplyMarkupMapper } from "../reply-markup";
import { StickerMapper } from "../sticker";
import { MaskPositionMapper } from "../mask-position";

export class SetStickerMaskPositionMapper {
	static toTelegram(
		options: TgAirBot.SetStickerMaskPosition,
	): Telegram.SetStickerMaskPosition {
		const entity: Telegram.SetStickerMaskPosition = {
			sticker: options.sticker,
			mask_position: options.maskPosition
				? MaskPositionMapper.toTelegram(options.maskPosition)
				: undefined,
		};

		return RemoveUndefinedKeysFromObject<Telegram.SetStickerMaskPosition>(
			entity,
		);
	}
}
