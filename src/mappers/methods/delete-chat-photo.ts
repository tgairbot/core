import * as TgAirBot from "../../types/tgairbot";
import * as Telegram from "../../types/telegram";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class DeleteChatPhotoMapper {
	static toTelegram(
		options: TgAirBot.DeleteChatPhoto,
	): Telegram.DeleteChatPhoto {
		const entity: Telegram.DeleteChatPhoto = {
			chat_id: options.chatId,
		};

		return RemoveUndefinedKeysFromObject<Telegram.DeleteChatPhoto>(entity);
	}
}
