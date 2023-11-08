import * as Telegram from "../types/telegram";
import * as TgAirBot from "../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../utils/remove-undefined-keys-from-object";
import { CallbackQueryMapper } from "./callback-query";
import { ChatMapper } from "./chat";
import { ChosenInlineResultMapper } from "./inline-query/chosen-inline-result";
import { InlineQueryMapper } from "./inline-query/inline-query";
import { MessageMapper } from "./message";
import { PreCheckoutQueryMapper } from "./payments/pre-checkout-query";
import { ShippingQueryMapper } from "./payments/shipping-query";
import { PollMapper } from "./poll";

export class UpdateMapper {
	static toTAB<T extends keyof TgAirBot.UpdatedTypes = "message">(
		options: Telegram.Update,
	): TgAirBot.Update<T> {
		const entity: TgAirBot.Update<any> = {
			updateId: options.update_id,
			callbackQuery: options.callback_query
				? CallbackQueryMapper.toTAB(options.callback_query)
				: undefined,
			channelPost: options.channel_post
				? MessageMapper.toTAB(options.channel_post)
				: undefined,
			chatJoinRequest: options.chat_join_request
				? ChatMapper.chatJoinRequestToTAB(options.chat_join_request)
				: undefined,
			chatMember: options.chat_member
				? ChatMapper.chatMemberUpdatedToTab(options.chat_member)
				: undefined,
			chosenInlineResult: options.chosen_inline_result
				? ChosenInlineResultMapper.toTAB(options.chosen_inline_result)
				: undefined,
			editedChannelPost: options.edited_channel_post
				? MessageMapper.toTAB(options.edited_channel_post)
				: undefined,
			editedMessage: options.edited_message
				? MessageMapper.toTAB(options.edited_message)
				: undefined,
			inlineQuery: options.inline_query
				? InlineQueryMapper.toTAB(options.inline_query)
				: undefined,
			message: options.message
				? MessageMapper.toTAB(options.message)
				: undefined,
			myChatMember: options.my_chat_member
				? ChatMapper.chatMemberUpdatedToTab(options.my_chat_member)
				: undefined,
			poll: options.poll ? PollMapper.toTAB(options.poll) : undefined,
			pollAnswer: options.poll_answer
				? PollMapper.pollAnswerToTAB(options.poll_answer)
				: undefined,
			preCheckoutQuery: options.pre_checkout_query
				? PreCheckoutQueryMapper.toTAB(options.pre_checkout_query)
				: undefined,
			shippingQuery: options.shipping_query
				? ShippingQueryMapper.toTAB(options.shipping_query)
				: undefined,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.Update<T>>(entity as any);
	}
}
