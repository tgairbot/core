import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class DeleteChatStickerSetMapper {
	static toTelegram(
		options: TgAirBot.DeleteChatStickerSet,
	): Telegram.DeleteChatStickerSet {
		const entity: Telegram.DeleteChatStickerSet = {
			chat_id: options.chatId,
		};

		return RemoveUndefinedKeysFromObject<Telegram.DeleteChatStickerSet>(
			entity,
		);
	}
}
