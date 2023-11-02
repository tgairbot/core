import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import * as TgAirBot from "../../types/tgairbot";
import * as Telegram from "../../types/telegram";
import { ReplyMarkupMapper } from "../reply-markup";

export class StopMessageLiveLocationMapper {
	static toTelegram(
		options: TgAirBot.StopMessageLiveLocation,
	): Telegram.StopMessageLiveLocation {
		const entity: Telegram.StopMessageLiveLocation = {
			message_id: options.messageId,
			inline_message_id: options.inlineMessageId,
			chat_id: options.chatId,
			reply_markup: options.replyMarkup
				? ReplyMarkupMapper.toTelegram(options.replyMarkup)
				: undefined,
		};

		return RemoveUndefinedKeysFromObject<Telegram.StopMessageLiveLocation>(
			entity,
		);
	}
}
