import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import { ReplyMarkupMapper } from "../reply-markup";
import { LabeledPriceMapper } from "../payments/labeled-price";

export class SendInvoiceMapper {
	static toTelegram(options: TgAirBot.SendInvoice): Telegram.SendInvoice {
		const entity: Telegram.SendInvoice = {
			chat_id: options.chatId,
			currency: options.currency,
			description: options.description,
			is_flexible: options.isFlexible,
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
			photo_width: options.photoWidth,
			provider_data: options.providerData,
			provider_token: options.providerToken,
			send_email_to_provider: options.sendEmailToProvider,
			send_phone_number_to_provider: options.sendPhoneNumberToProvider,
			start_parameter: options.startParameter,
			title: options.title,
			suggested_tip_amounts: options.suggestedTipAmounts,
			disable_notification: options.disableNotification,
			allow_sending_without_reply: options.allowSendingWithoutReply,
			message_thread_id: options.messageThreadId,
			protect_content: options.protectContent,
			reply_to_message_id: options.replyToMessageId,
			reply_markup: options.replyMarkup
				? ReplyMarkupMapper.toTelegram(options.replyMarkup)
				: undefined,
		};

		return RemoveUndefinedKeysFromObject<Telegram.SendInvoice>(entity);
	}
}
