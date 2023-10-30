import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { MessageMapper } from "../message";
import { ReplyMarkupMapper } from "../reply-markup";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class EditMessageCaptionMapper {
	static toTelegram(
		options: TgAirBot.EditMessageCaption,
	): Telegram.EditMessageCaption {
		const entity: Telegram.EditMessageCaption = {
			caption_entities: options.captionEntities
				? options.captionEntities.map(
						MessageMapper.messageEntityToTelegram,
				  )
				: undefined,
			message_id: options.messageId,
			caption: options.caption,
			inline_message_id: options.inlineMessageId,
			chat_id: options.chatId,
			parse_mode: options.parseMode,
			reply_markup: options.replyMarkup
				? ReplyMarkupMapper.toTelegram(options.replyMarkup)
				: undefined,
		};

		return RemoveUndefinedKeysFromObject<Telegram.EditMessageCaption>(
			entity,
		);
	}
}
