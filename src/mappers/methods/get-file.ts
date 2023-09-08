import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class GetFileMapper {
	static toTelegram(options: TgAirBot.GetFile): Telegram.GetFile {
		const entity: Telegram.GetFile = {
			file_id: options.fileId,
		};

		return RemoveUndefinedKeysFromObject<Telegram.GetFile>(entity);
	}
}
