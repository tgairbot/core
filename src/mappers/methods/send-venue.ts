import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import { ReplyMarkupMapper } from "../reply-markup";

export class SendVenueMapper {
	static toTelegram(options: TgAirBot.SendVenue): Telegram.SendVenue {
		const entity: Telegram.SendVenue = {
			chat_id: options.chatId,
			address: options.address,
			latitude: options.latitude,
			longitude: options.longitude,
			title: options.title,
			allow_sending_without_reply: options.allowSendingWithoutReply,
			disable_notification: options.disableNotification,
			foursquare_id: options.foursquareId,
			foursquare_type: options.foursquareType,
			google_place_id: options.googlePlaceId,
			google_place_type: options.googlePlaceType,
			message_thread_id: options.messageThreadId,
			protect_content: options.protectContent,
			reply_to_message_id: options.replyToMessageId,
			reply_markup: options.replyMarkup
				? ReplyMarkupMapper.replyMarkupToTelegram(options.replyMarkup)
				: undefined,
		};

		return RemoveUndefinedKeysFromObject<Telegram.SendVenue>(entity);
	}
}
