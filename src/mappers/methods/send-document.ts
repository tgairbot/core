import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import { MessageMapper } from "../message";
import { ReplyMarkupMapper } from "../reply-markup";

export class SendDocumentMapper {
	static toTelegram(options: TgAirBot.SendDocument): Telegram.SendDocument {
		const entity: Telegram.SendDocument = {
			reply_markup: options.replyMarkup
				? ReplyMarkupMapper.replyMarkupToTelegram(options.replyMarkup)
				: undefined,
			caption: options.caption,
			chat_id: options.chatId,
			message_thread_id: options.messageThreadId,
			parse_mode: options.parseMode,
			protect_content: options.protectContent,
			reply_to_message_id: options.replyToMessageId,
			disable_notification: options.disableNotification,
			allow_sending_without_reply: options.allowSendingWithoutReply,
			caption_entities: options.captionEntities
				? options.captionEntities.map(
						MessageMapper.messageEntityToTelegram,
				  )
				: undefined,
			document: options.document,
			thumbnail: options.thumbnail,
			disable_content_type_detection: options.disableContentTypeDetection,
		};

		const parse =
			RemoveUndefinedKeysFromObject<Telegram.SendDocument>(entity);

		if (typeof options.document !== "string") {
			parse.document = options.document;
		}

		if (options.thumbnail && typeof options.thumbnail !== "string") {
			parse.thumbnail = options.thumbnail;
		}

		return parse;
	}
}
