import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import * as TgAirBot from "../../types/tgairbot";
import * as Telegram from "../../types/telegram";
import { ReplyMarkupMapper } from "../reply-markup";
import { StickerMapper } from "../sticker";
import { LabeledPriceMapper } from "../payments/labeled-price";

export class CreateInvoiceLinkMapper {
	static toTelegram(
		options: TgAirBot.CreateInvoiceLink,
	): Telegram.CreateInvoiceLink {
		const entity: Telegram.CreateInvoiceLink = {
			is_flexible: options.isFlexible,
			send_email_to_provider: options.sendEmailToProvider,
			currency: options.currency,
			description: options.description,
			max_tip_amount: options.maxTipAmount,
			need_email: options.needEmail,
			need_name: options.needName,
			need_phone_number: options.needPhoneNumber,
			need_shipping_address: options.needShippingAddress,
			payload: options.payload,
			photo_height: options.photoHeight,
			photo_size: options.photoSize,
			photo_url: options.photoUrl,
			prices: options.prices.map(LabeledPriceMapper.toTelegram),
			title: options.title,
			photo_width: options.photoWidth,
			provider_data: options.providerData,
			provider_token: options.provider_token,
			send_phone_number_to_provider: options.sendPhoneNumberToProvider,
			suggested_tip_amounts: options.suggestedTipAmounts,
		};

		return RemoveUndefinedKeysFromObject<Telegram.CreateInvoiceLink>(
			entity,
		);
	}
}
