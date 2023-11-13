import { CallbackQuery } from "./callback-query";
import { ChatJoinRequest, ChatMemberUpdated } from "./chat";
import { ChosenInlineResult } from "./inline-query/chosen-inline-result";
import { InlineQuery } from "./inline-query/inline-query";
import { Message } from "./message";
import { PreCheckoutQuery } from "./payments/pre-checkout-query";
import { ShippingQuery } from "./payments/shipping-query";
import { Poll, PollAnswer } from "./poll";

export type ConditionKey<T extends keyof UpdatedTypes> = T extends "message"
	? { message: Message }
	: T extends "editedMessage"
	? { editedMessage: Message }
	: T extends "channelPost"
	? { channelPost: Message }
	: T extends "editedChannelPost"
	? { editedChannelPost: Message }
	: T extends "inlineQuery"
	? { inlineQuery: InlineQuery }
	: T extends "chosenInlineResult"
	? { chosenInlineResult: ChosenInlineResult }
	: T extends "callbackQuery"
	? { callbackQuery: CallbackQuery }
	: T extends "shippingQuery"
	? { shippingQuery: ShippingQuery }
	: T extends "preCheckoutQuery"
	? { preCheckoutQuery: PreCheckoutQuery }
	: T extends "poll"
	? { poll: Poll }
	: T extends "pollAnswer"
	? { pollAnswer: PollAnswer }
	: T extends "myChatMember"
	? { myChatMember: ChatMemberUpdated }
	: T extends "chatMember"
	? { chatMember: ChatMemberUpdated }
	: T extends "chatJoinRequest"
	? { chatJoinRequest: ChatJoinRequest }
	: unknown;

export type ConditionData<T extends keyof UpdatedTypes> = T extends "message"
	? Message
	: T extends "editedMessage"
	? Message
	: T extends "channelPost"
	? Message
	: T extends "editedChannelPost"
	? Message
	: T extends "inlineQuery"
	? InlineQuery
	: T extends "chosenInlineResult"
	? ChosenInlineResult
	: T extends "callbackQuery"
	? CallbackQuery
	: T extends "shippingQuery"
	? ShippingQuery
	: T extends "preCheckoutQuery"
	? PreCheckoutQuery
	: T extends "poll"
	? Poll
	: T extends "pollAnswer"
	? PollAnswer
	: T extends "myChatMember"
	? ChatMemberUpdated
	: T extends "chatMember"
	? ChatMemberUpdated
	: T extends "chatJoinRequest"
	? ChatJoinRequest
	: unknown;

export type Update<T extends keyof UpdatedTypes> = Partial<UpdatedTypes> &
	ConditionKey<T> & {
		updateId: number;
	};

export interface UpdatedTypes {
	message: Message;
	editedMessage: Message;
	channelPost: Message;
	editedChannelPost: Message;
	inlineQuery: InlineQuery;
	chosenInlineResult: ChosenInlineResult;
	callbackQuery: CallbackQuery;
	shippingQuery: ShippingQuery;
	preCheckoutQuery: PreCheckoutQuery;
	poll: Poll;
	pollAnswer: PollAnswer;
	myChatMember: ChatMemberUpdated;
	chatMember: ChatMemberUpdated;
	chatJoinRequest: ChatJoinRequest;
}

export type AnyUpdateType =
	| "message"
	| "editedMessage"
	| "channelPost"
	| "editedChannelPost"
	| "inlineQuery"
	| "chosenInlineResult"
	| "callbackQuery"
	| "shippingQuery"
	| "preCheckoutQuery"
	| "poll"
	| "pollAnswer"
	| "myChatMember"
	| "chatMember"
	| "chatJoinRequest";
