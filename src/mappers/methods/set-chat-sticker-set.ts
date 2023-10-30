import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class SetChatStickerSetMapper {
	static toTelegram(
		options: TgAirBot.SetChatStickerSet,
	): Telegram.SetChatStickerSet {
		const entity: Telegram.SetChatStickerSet = {
			chat_id: options.chatId,
			sticker_set_name: options.stickerSetName,
		};

		return RemoveUndefinedKeysFromObject<Telegram.SetChatStickerSet>(
			entity,
		);
	}
}
