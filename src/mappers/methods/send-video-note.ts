import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import { ReplyMarkupMapper } from "../reply-markup";

export class SendVideoNoteMapper {
	static toTelegram(options: TgAirBot.SendVideoNote): Telegram.SendVideoNote {
		const entity: Telegram.SendVideoNote = {
			reply_markup: options.replyMarkup
				? ReplyMarkupMapper.replyMarkupToTelegram(options.replyMarkup)
				: undefined,
			chat_id: options.chatId,
			message_thread_id: options.messageThreadId,
			protect_content: options.protectContent,
			reply_to_message_id: options.replyToMessageId,
			disable_notification: options.disableNotification,
			allow_sending_without_reply: options.allowSendingWithoutReply,
			video_note: options.videoNote,
			duration: options.duration,
			thumbnail: options.thumbnail,
			length: options.length,
		};

		const parse =
			RemoveUndefinedKeysFromObject<Telegram.SendVideoNote>(entity);

		if (typeof options.videoNote !== "string") {
			parse.video_note = options.videoNote;
		}

		if (options.thumbnail && typeof options.thumbnail !== "string") {
			parse.thumbnail = options.thumbnail;
		}

		return parse;
	}
}
