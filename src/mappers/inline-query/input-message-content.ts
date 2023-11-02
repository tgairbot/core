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

	static toTelegram(
		options: TgAirBot.InputMessageContent,
	): Telegram.InputMessageContent {
		const entity: Telegram.InputMessageContent = {
			...InputMessageContentMapper.inputTextMessageContentToTelegram(
				options as TgAirBot.InputTextMessageContent,
			),
			...InputMessageContentMapper.inputLocationMessageContentToTelegram(
				options as TgAirBot.InputLocationMessageContent,
			),
			...InputMessageContentMapper.inputContactMessageContentToTelegram(
				options as TgAirBot.InputContactMessageContent,
			),
			...InputMessageContentMapper.inputVenueMessageContentToTelegram(
				options as TgAirBot.InputVenueMessageContent,
			),
			...InputMessageContentMapper.inputInvoiceMessageContentToTelegram(
				options as TgAirBot.InputInvoiceMessageContent,
			),
		};

		return RemoveUndefinedKeysFromObject<Telegram.InputMessageContent>(
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

	static inputTextMessageContentToTelegram(
		options: TgAirBot.InputTextMessageContent,
	): Telegram.InputTextMessageContent {
		const entity: Telegram.InputTextMessageContent = {
			disable_web_page_preview: options.disableWebPagePreview,
			entities: options.entities
				? options.entities.map(MessageMapper.messageEntityToTelegram)
				: undefined,
			message_text: options.messageText,
			parse_mode: options.parseMode,
		};

		return RemoveUndefinedKeysFromObject<Telegram.InputTextMessageContent>(
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

	static inputLocationMessageContentToTelegram(
		options: TgAirBot.InputLocationMessageContent,
	): Telegram.InputLocationMessageContent {
		const entity: Telegram.InputLocationMessageContent = {
			latitude: options.latitude,
			longitude: options.longitude,
			heading: options.heading,
			horizontal_accuracy: options.horizontalAccuracy,
			live_period: options.livePeriod,
			proximity_alert_radius: options.proximityAlertRadius,
		};

		return RemoveUndefinedKeysFromObject<Telegram.InputLocationMessageContent>(
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

	static inputContactMessageContentToTelegram(
		options: TgAirBot.InputContactMessageContent,
	): Telegram.InputContactMessageContent {
		const entity: Telegram.InputContactMessageContent = {
			phone: options.phone,
			first_name: options.firstName,
			last_name: options.lastName,
			vcard: options.vcard,
		};

		return RemoveUndefinedKeysFromObject<Telegram.InputContactMessageContent>(
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

	static inputVenueMessageContentToTelegram(
		options: TgAirBot.InputVenueMessageContent,
	): Telegram.InputVenueMessageContent {
		const entity: Telegram.InputVenueMessageContent = {
			address: options.address,
			latitude: options.latitude,
			longitude: options.longitude,
			title: options.title,
			foursquare_id: options.foursquareId,
			foursquare_type: options.foursquareType,
			google_place_id: options.googlePlaceId,
			google_place_type: options.googlePlaceType,
		};

		return RemoveUndefinedKeysFromObject<Telegram.InputVenueMessageContent>(
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

	static inputInvoiceMessageContentToTelegram(
		options: TgAirBot.InputInvoiceMessageContent,
	): Telegram.InputInvoiceMessageContent {
		const entity: Telegram.InputInvoiceMessageContent = {
			currency: options.currency,
			description: options.description,
			payload: options.payload,
			prices: options.prices,
			provider_token: options.providerToken,
			title: options.title,
			is_flexible: options.isFlexible,
			max_tip_amount: options.maxTipAmount,
			need_email: options.needEmail,
			need_name: options.needName,
			need_phone_number: options.needPhoneNumber,
			need_shipping_address: options.needShippingAddress,
			photo_height: options.photoHeight,
			photo_size: options.photoSize,
			photo_url: options.photoUrl,
			photo_width: options.photoWidth,
			provider_data: options.providerData,
			send_email_to_provider: options.sendEmailToProvider,
			send_phone_number_to_provider: options.sendEmailToProvider,
			suggested_tip_amounts: options.suggestedTipAmounts,
		};

		return RemoveUndefinedKeysFromObject<Telegram.InputInvoiceMessageContent>(
			entity,
		);
	}
}
