import * as Telegram from "../types/telegram";
import * as TgAirBot from "../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../utils/remove-undefined-keys-from-object";
import { PhotoMapper } from "./photo";

export class AudioMapper {
	static toTAB(audio: Telegram.Audio): TgAirBot.Audio {
		const entity: TgAirBot.Audio = {
			thumbnail: audio.thumbnail
				? PhotoMapper.toTAB(audio.thumbnail)
				: undefined,
			duration: audio.duration,
			mimeType: audio.mime_type,
			fileName: audio.file_name,
			fileId: audio.file_id,
			fileSize: audio.file_size,
			fileUniqueId: audio.file_unique_id,
			title: audio.title,
			performer: audio.performer,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.Audio>(entity);
	}
}
