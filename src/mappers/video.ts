import * as Telegram from "../types/telegram";
import * as TgAigBot from "../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../utils/remove-undefined-keys-from-object";
import { PhotoMapper } from "./photo";

export class VideoMapper {
	static toTAB(video: Telegram.Video): TgAigBot.Video {
		const entity: TgAigBot.Video = {
			fileUniqueId: video.file_unique_id,
			fileSize: video.file_size,
			fileId: video.file_id,
			fileName: video.file_name,
			mimeType: video.mime_type,
			duration: video.duration,
			thumbnail: video.thumbnail
				? PhotoMapper.toTAB(video.thumbnail)
				: undefined,
			width: video.width,
			height: video.height,
		};

		return RemoveUndefinedKeysFromObject<TgAigBot.Video>(entity);
	}

	static videoNoteToTAB(videoNote: Telegram.VideoNote): TgAigBot.VideoNote {
		const entity: TgAigBot.VideoNote = {
			thumbnail: videoNote.thumbnail
				? PhotoMapper.toTAB(videoNote.thumbnail)
				: undefined,
			fileId: videoNote.file_id,
			fileSize: videoNote.file_size,
			fileUniqueId: videoNote.file_unique_id,
			duration: videoNote.duration,
			length: videoNote.length,
		};

		return RemoveUndefinedKeysFromObject<TgAigBot.VideoNote>(entity);
	}
}
