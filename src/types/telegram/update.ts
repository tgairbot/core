import { CallbackQuery } from "./callback-query";
import { ChatJoinRequest, ChatMemberUpdated } from "./chat";
import { ChosenInlineResult } from "./inline-query/chosen-inline-result";
import { InlineQuery } from "./inline-query/inline-query";
import { Message } from "./message";
import { PreCheckoutQuery } from "./payments/pre-checkout-query";
import { ShippingQuery } from "./payments/shipping-query";
import { Poll, PollAnswer } from "./poll";

export interface OptionsUpdates {
	limit?: number;
	timeout?: number;
	allowedUpdates?: Array<keyof UpdatedTypes>;
	interval?: number;
	log?: boolean;
}

export interface GetUpdates {
	offset?: number;
	limit?: number;
	timeout?: number;
	allowed_updates?: Array<keyof UpdatedTypes>;
}

export interface Update extends Partial<UpdatedTypes> {
	update_id: number;
}

export const AvailableUpdates: Array<keyof UpdatedTypes> = [
	"message",
	"edited_message",
	"channel_post",
	"edited_channel_post",
	"inline_query",
	"chosen_inline_result",
	"callback_query",
	"shipping_query",
	"pre_checkout_query",
	"poll",
	"poll_answer",
	"my_chat_member",
	"chat_member",
	"chat_join_request",
];

export interface UpdatedTypes {
	message: Message;
	edited_message: Message;
	channel_post: Message;
	edited_channel_post: Message;
	inline_query: InlineQuery;
	chosen_inline_result: ChosenInlineResult;
	callback_query: CallbackQuery;
	shipping_query: ShippingQuery;
	pre_checkout_query: PreCheckoutQuery;
	poll: Poll;
	poll_answer: PollAnswer;
	my_chat_member: ChatMemberUpdated;
	chat_member: ChatMemberUpdated;
	chat_join_request: ChatJoinRequest;
}
