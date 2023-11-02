import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import * as TgAirBot from "../../types/tgairbot";
import * as Telegram from "../../types/telegram";
import { ReplyMarkupMapper } from "../reply-markup";

export class StopPollMapper {
	static toTelegram(options: TgAirBot.StopPoll): Telegram.StopPoll {
		const entity: Telegram.StopPoll = {
			message_id: options.messageId,
			chat_id: options.chatId,
			reply_markup: options.replyMarkup
				? ReplyMarkupMapper.toTelegram(options.replyMarkup)
				: undefined,
		};

		return RemoveUndefinedKeysFromObject<Telegram.StopPoll>(entity);
	}
}
