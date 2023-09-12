import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class SetChatPhotoMapper {
	static toTelegram(options: TgAirBot.SetChatPhoto): Telegram.SetChatPhoto {
		const entity: Telegram.SetChatPhoto = {
			chat_id: options.chatId,
			photo: options.photo,
		};

		return RemoveUndefinedKeysFromObject<Telegram.SetChatPhoto>(entity);
	}
}
