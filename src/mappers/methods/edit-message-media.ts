import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { InputMapper } from "../input";
import { ReplyMarkupMapper } from "../reply-markup";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class EditMessageMediaMapper {
	static toTelegram(
		options: TgAirBot.EditMessageMedia,
	): Telegram.EditMessageMedia {
		const entity: Telegram.EditMessageMedia = {
			chat_id: options.chatId,
			message_id: options.messageId,
			media: InputMapper.toTelegram(options.media),
			reply_markup: options.replyMarkup
				? ReplyMarkupMapper.toTelegram(options.replyMarkup)
				: undefined,
			inline_message_id: options.inlineMessageId,
		};

		return RemoveUndefinedKeysFromObject<Telegram.EditMessageMedia>(entity);
	}
}
