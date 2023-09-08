import * as Telegram from "../types/telegram";
import * as TgAirBot from "../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../utils/remove-undefined-keys-from-object";

export class FileMapper {
	static toTAB(file: Telegram.File): TgAirBot.File {
		const entity: TgAirBot.File = {
			fileId: file.file_id,
			fileSize: file.file_size,
			fileUniqueId: file.file_unique_id,
			filePath: file.file_path,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.File>(entity);
	}
}
