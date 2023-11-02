import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import * as TgAirBot from "../../types/tgairbot";
import * as Telegram from "../../types/telegram";
import { ReplyMarkupMapper } from "../reply-markup";

export class EditMessageLiveLocationMapper {
	static toTelegram(
		options: TgAirBot.EditMessageLiveLocation,
	): Telegram.EditMessageLiveLocation {
		const entity: Telegram.EditMessageLiveLocation = {
			message_id: options.messageId,
			inline_message_id: options.inlineMessageId,
			chat_id: options.chatId,
			reply_markup: options.replyMarkup
				? ReplyMarkupMapper.toTelegram(options.replyMarkup)
				: undefined,
			heading: options.heading,
			horizontal_accuracy: options.horizontalAccuracy,
			latitude: options.latitude,
			longitude: options.longitude,
			proximity_alert_radius: options.proximityAlertRadius,
		};

		return RemoveUndefinedKeysFromObject<Telegram.EditMessageLiveLocation>(
			entity,
		);
	}
}
