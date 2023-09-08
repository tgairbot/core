import * as Telegram from "../types/telegram";
import * as TgAirBot from "../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../utils/remove-undefined-keys-from-object";

export class PhotoMapper {
	static toTAB(photoSize: Telegram.PhotoSize): TgAirBot.PhotoSize {
		const entity: TgAirBot.PhotoSize = {
			width: photoSize.width,
			height: photoSize.height,
			fileId: photoSize.file_id,
			fileSize: photoSize.file_size,
			fileUniqueId: photoSize.file_unique_id,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.PhotoSize>(entity);
	}
}
