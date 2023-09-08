import * as Telegram from "../types/telegram";
import * as TgAirBot from "../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../utils/remove-undefined-keys-from-object";
import { PhotoMapper } from "./photo";

export class DocumentMapper {
	static toTAB(document: Telegram.Document): TgAirBot.Document {
		const entity: TgAirBot.Document = {
			fileUniqueId: document.file_unique_id,
			fileSize: document.file_size,
			fileId: document.file_id,
			thumbnail: document.thumbnail
				? PhotoMapper.toTAB(document.thumbnail)
				: undefined,
			mimeType: document.mime_type,
			fileName: document.file_name,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.Document>(entity);
	}
}
