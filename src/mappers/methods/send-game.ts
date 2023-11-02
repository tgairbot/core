import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import { ReplyMarkupMapper } from "../reply-markup";

export class SendGameMapper {
	static toTelegram(options: TgAirBot.SendGame): Telegram.SendGame {
		const entity: Telegram.SendGame = {
			chat_id: options.chatId,
			allow_sending_without_reply: options.allowSendingWithoutReply,
			message_thread_id: options.messageThreadId,
			protect_content: options.protectContent,
			reply_to_message_id: options.replyToMessageId,
			disable_notification: options.disableNotification,
			game_short_name: options.gameShortName,
			reply_markup: options.replyMarkup
				? ReplyMarkupMapper.toTelegram(options.replyMarkup)
				: undefined,
		};

		return RemoveUndefinedKeysFromObject<Telegram.SendGame>(entity);
	}
}
