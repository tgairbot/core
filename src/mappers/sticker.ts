import * as Telegram from "../types/telegram";
import * as TgAirBot from "../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../utils/remove-undefined-keys-from-object";
import { FileMapper } from "./file";
import { MaskPositionMapper } from "./mask-position";
import { PhotoMapper } from "./photo";

export class StickerMapper {
	static toTAB(sticker: Telegram.Sticker): TgAirBot.Sticker {
		const entity: TgAirBot.Sticker = {
			fileUniqueId: sticker.file_unique_id,
			fileSize: sticker.file_size,
			fileId: sticker.file_id,
			height: sticker.height,
			width: sticker.width,
			thumbnail: sticker.thumbnail
				? PhotoMapper.toTAB(sticker.thumbnail)
				: undefined,
			type: sticker.type,
			customEmojiId: sticker.custom_emoji_id,
			emoji: sticker.emoji,
			isVideo: sticker.is_video,
			setName: sticker.set_name,
			isAnimated: sticker.is_animated,
			maskPosition: sticker.mask_position
				? MaskPositionMapper.toTAB(sticker.mask_position)
				: undefined,
			needsRepainting: sticker.needs_repainting,
			premiumAnimation: sticker.premium_animation
				? FileMapper.toTAB(sticker.premium_animation)
				: undefined,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.Sticker>(entity);
	}
}
