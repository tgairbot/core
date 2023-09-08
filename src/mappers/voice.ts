import * as Telegram from "../types/telegram";
import * as TgAirBot from "../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../utils/remove-undefined-keys-from-object";

export class VoiceMapper {
	static toTAB(voice: Telegram.Voice): TgAirBot.Voice {
		const entity: TgAirBot.Voice = {
			duration: voice.duration,
			mimeType: voice.mime_type,
			fileId: voice.file_id,
			fileSize: voice.file_size,
			fileUniqueId: voice.file_unique_id,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.Voice>(entity);
	}
}
