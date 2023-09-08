import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import { ReplyMarkupMapper } from "../reply-markup";

export class SendLocationMapper {
	static toTelegram(options: TgAirBot.SendLocation): Telegram.SendLocation {
		const entity: Telegram.SendLocation = {
			chat_id: options.chatId,
			latitude: options.latitude,
			longitude: options.longitude,
			disable_notification: options.disableNotification,
			allow_sending_without_reply: options.allowSendingWithoutReply,
			heading: options.heading,
			horizontal_accuracy: options.horizontalAccuracy,
			live_period: options.livePeriod,
			message_thread_id: options.messageThreadId,
			protect_content: options.protectContent,
			proximity_alert_radius: options.proximityAlertRadius,
			reply_to_message_id: options.replyToMessageId,
			reply_markup: options.replyMarkup
				? ReplyMarkupMapper.replyMarkupToTelegram(options.replyMarkup)
				: undefined,
		};

		return RemoveUndefinedKeysFromObject<Telegram.SendLocation>(entity);
	}
}
