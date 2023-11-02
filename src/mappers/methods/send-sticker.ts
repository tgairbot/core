import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import { InputMapper } from "../input";
import { ReplyMarkupMapper } from "../reply-markup";

export class SendStickerMapper {
	static toTelegram(options: TgAirBot.SendSticker): Telegram.SendSticker {
		const entity: Telegram.SendSticker = {
			chat_id: options.chatId,
			message_thread_id: options.messageThreadId,
			protect_content: options.protectContent,
			reply_to_message_id: options.replyToMessageId,
			disable_notification: options.disableNotification,
			allow_sending_without_reply: options.allowSendingWithoutReply,
			reply_markup: options.replyMarkup
				? ReplyMarkupMapper.replyMarkupToTelegram(options.replyMarkup)
				: undefined,
			emoji: options.emoji,
			sticker: options.sticker,
		};

		const parse =
			RemoveUndefinedKeysFromObject<Telegram.SendSticker>(entity);

		if (typeof parse.sticker === "string") {
			return parse;
		}

		parse.sticker = options.sticker;

		return parse;
	}
}
