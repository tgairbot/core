import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { MessageMapper } from "../message";
import { ReplyMarkupMapper } from "../reply-markup";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class EditMessageTextMapper {
	static toTelegram(
		options: TgAirBot.EditMessageText,
	): Telegram.EditMessageText {
		const entity: Telegram.EditMessageText = {
			disable_web_page_preview: options.disableWebPagePreview,
			entities: options.entities
				? options.entities.map(MessageMapper.messageEntityToTelegram)
				: undefined,
			message_id: options.messageId,
			text: options.text,
			inline_message_id: options.inlineMessageId,
			chat_id: options.chatId,
			parse_mode: options.parseMode,
			reply_markup: options.replyMarkup
				? ReplyMarkupMapper.toTelegram(options.replyMarkup)
				: undefined,
		};

		return RemoveUndefinedKeysFromObject<Telegram.EditMessageText>(entity);
	}
}
