import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { MenuButtonMapper } from "../menu";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class SetChatMenuButtonMapper {
	static toTelegram(
		options: TgAirBot.SetChatMenuButton,
	): Telegram.SetChatMenuButton {
		const entity: Telegram.SetChatMenuButton = {
			chat_id: options.chatId,
			menu_button: options.menuButton
				? MenuButtonMapper.toTelegram(options.menuButton)
				: undefined,
		};

		return RemoveUndefinedKeysFromObject<Telegram.SetChatMenuButton>(
			entity,
		);
	}
}
