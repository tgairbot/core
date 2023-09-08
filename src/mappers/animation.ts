import * as Telegram from "../types/telegram";
import * as TgAirBot from "../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../utils/remove-undefined-keys-from-object";
import { PhotoMapper } from "./photo";

export class AnimationMapper {
	static toTAB(animation: Telegram.Animation): TgAirBot.Animation {
		const entity: TgAirBot.Animation = {
			fileUniqueId: animation.file_unique_id,
			fileSize: animation.file_size,
			fileId: animation.file_id,
			height: animation.height,
			width: animation.width,
			duration: animation.duration,
			fileName: animation.file_name,
			mimeType: animation.mime_type,
			thumbnail: animation.thumbnail
				? PhotoMapper.toTAB(animation.thumbnail)
				: undefined,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.Animation>(entity);
	}
}
