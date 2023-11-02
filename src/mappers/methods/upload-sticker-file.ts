import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import * as TgAirBot from "../../types/tgairbot";
import * as Telegram from "../../types/telegram";
import { ReplyMarkupMapper } from "../reply-markup";

export class UploadStickerFileMapper {
	static toTelegram(
		options: TgAirBot.UploadStickerFile,
	): Telegram.UploadStickerFile {
		const entity: Telegram.UploadStickerFile = {
			user_id: options.userId,
			sticker: options.sticker,
			sticker_format: options.stickerFormat,
		};

		return RemoveUndefinedKeysFromObject<Telegram.UploadStickerFile>(
			entity,
		);
	}
}
