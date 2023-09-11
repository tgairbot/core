import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import { MessageMapper } from "../message";

export class InputMessageContentMapper {
	static toTAB(
		options: Telegram.InputMessageContent,
	): TgAirBot.InputMessageContent {
		const entity: TgAirBot.InputMessageContent = {
			...InputMessageContentMapper.inputTextMessageContentToTAB(
				options as Telegram.InputTextMessageContent,
			),
			...InputMessageContentMapper.inputLocationMessageContentToTAB(
				options as Telegram.InputLocationMessageContent,
			),
			...InputMessageContentMapper.inputContactMessageContentToTAB(
				options as Telegram.InputContactMessageContent,
			),
			...InputMessageContentMapper.inputVenueMessageContentToTAB(
				options as Telegram.InputVenueMessageContent,
			),
			...InputMessageContentMapper.inputInvoiceMessageContentToTAB(
				options as Telegram.InputInvoiceMessageContent,
			),
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.InputMessageContent>(
			entity,
		);
	}

	static inputTextMessageContentToTAB(
		options: Telegram.InputTextMessageContent,
	): TgAirBot.InputTextMessageContent {
		const entity: TgAirBot.InputTextMessageContent = {
			disableWebPagePreview: options.disable_web_page_preview,
			entities: options.entities
				? options.entities.map(MessageMapper.messageEntityToTAB)
				: undefined,
			messageText: options.message_text,
			parseMode: options.parse_mode,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.InputTextMessageContent>(
			entity,
		);
	}

	static inputLocationMessageContentToTAB(
		options: Telegram.InputLocationMessageContent,
	): TgAirBot.InputLocationMessageContent {
		const entity: TgAirBot.InputLocationMessageContent = {
			latitude: options.latitude,
			longitude: options.longitude,
			heading: options.heading,
			horizontalAccuracy: options.horizontal_accuracy,
			livePeriod: options.live_period,
			proximityAlertRadius: options.proximity_alert_radius,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.InputLocationMessageContent>(
			entity,
		);
	}

	static inputContactMessageContentToTAB(
		options: Telegram.InputContactMessageContent,
	): TgAirBot.InputContactMessageContent {
		const entity: TgAirBot.InputContactMessageContent = {
			firstName: options.first_name,
			phone: options.phone,
			lastName: options.last_name,
			vcard: options.vcard,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.InputContactMessageContent>(
			entity,
		);
	}

	static inputVenueMessageContentToTAB(
		options: Telegram.InputVenueMessageContent,
	): TgAirBot.InputVenueMessageContent {
		const entity: TgAirBot.InputVenueMessageContent = {
			address: options.address,
			latitude: options.latitude,
			longitude: options.longitude,
			title: options.title,
			foursquareId: options.foursquare_id,
			foursquareType: options.foursquare_type,
			googlePlaceId: options.google_place_id,
			googlePlaceType: options.google_place_type,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.InputVenueMessageContent>(
			entity,
		);
	}

	static inputInvoiceMessageContentToTAB(
		options: Telegram.InputInvoiceMessageContent,
	): TgAirBot.InputInvoiceMessageContent {
		const entity: TgAirBot.InputInvoiceMessageContent = {
			currency: options.currency,
			description: options.description,
			payload: options.payload,
			prices: options.prices,
			providerToken: options.provider_token,
			title: options.title,
			isFlexible: options.is_flexible,
			maxTipAmount: options.max_tip_amount,
			needEmail: options.need_email,
			needName: options.need_name,
			needPhoneNumber: options.need_phone_number,
			needShippingAddress: options.need_shipping_address,
			photoHeight: options.photo_height,
			photoSize: options.photo_size,
			photoUrl: options.photo_url,
			photoWidth: options.photo_width,
			providerData: options.provider_data,
			sendEmailToProvider: options.send_email_to_provider,
			sendPhoneNumberToProvider: options.send_phone_number_to_provider,
			suggestedTipAmounts: options.suggested_tip_amounts,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.InputInvoiceMessageContent>(
			entity,
		);
	}
}
