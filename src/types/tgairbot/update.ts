import * as TgAirBot from "../tgairbot";

export type ConditionKey<T extends keyof TgAirBot.UpdatedTypes> =
	T extends "message"
		? { message: TgAirBot.Message }
		: T extends "editedMessage"
		? { editedMessage: TgAirBot.Message }
		: T extends "channelPost"
		? { channelPost: TgAirBot.Message }
		: T extends "editedChannelPost"
		? { editedChannelPost: TgAirBot.Message }
		: T extends "inlineQuery"
		? { inlineQuery: TgAirBot.InlineQuery }
		: T extends "chosenInlineResult"
		? { chosenInlineResult: TgAirBot.ChosenInlineResult }
		: T extends "callbackQuery"
		? { callbackQuery: TgAirBot.CallbackQuery }
		: T extends "shippingQuery"
		? { shippingQuery: TgAirBot.ShippingQuery }
		: T extends "preCheckoutQuery"
		? { preCheckoutQuery: TgAirBot.PreCheckoutQuery }
		: T extends "poll"
		? { poll: TgAirBot.Poll }
		: T extends "pollAnswer"
		? { pollAnswer: TgAirBot.PollAnswer }
		: T extends "myChatMember"
		? { myChatMember: TgAirBot.ChatMemberUpdated }
		: T extends "chatMember"
		? { chatMember: TgAirBot.ChatMemberUpdated }
		: T extends "chatJoinRequest"
		? { chatJoinRequest: TgAirBot.ChatJoinRequest }
		: unknown;

export type ConditionData<T extends keyof TgAirBot.UpdatedTypes> =
	T extends "message"
		? TgAirBot.Message
		: T extends "editedMessage"
		? TgAirBot.Message
		: T extends "channelPost"
		? TgAirBot.Message
		: T extends "editedChannelPost"
		? TgAirBot.Message
		: T extends "inlineQuery"
		? TgAirBot.InlineQuery
		: T extends "chosenInlineResult"
		? TgAirBot.ChosenInlineResult
		: T extends "callbackQuery"
		? TgAirBot.CallbackQuery
		: T extends "shippingQuery"
		? TgAirBot.ShippingQuery
		: T extends "preCheckoutQuery"
		? TgAirBot.PreCheckoutQuery
		: T extends "poll"
		? TgAirBot.Poll
		: T extends "pollAnswer"
		? TgAirBot.PollAnswer
		: T extends "myChatMember"
		? TgAirBot.ChatMemberUpdated
		: T extends "chatMember"
		? TgAirBot.ChatMemberUpdated
		: T extends "chatJoinRequest"
		? TgAirBot.ChatJoinRequest
		: unknown;

export type Update<T extends keyof TgAirBot.UpdatedTypes> =
	Partial<TgAirBot.UpdatedTypes> &
		ConditionKey<T> & {
			updateId: number;
		};

export interface UpdatedTypes {
	message: TgAirBot.Message;
	editedMessage: TgAirBot.Message;
	channelPost: TgAirBot.Message;
	editedChannelPost: TgAirBot.Message;
	inlineQuery: TgAirBot.InlineQuery;
	chosenInlineResult: TgAirBot.ChosenInlineResult;
	callbackQuery: TgAirBot.CallbackQuery;
	shippingQuery: TgAirBot.ShippingQuery;
	preCheckoutQuery: TgAirBot.PreCheckoutQuery;
	poll: TgAirBot.Poll;
	pollAnswer: TgAirBot.PollAnswer;
	myChatMember: TgAirBot.ChatMemberUpdated;
	chatMember: TgAirBot.ChatMemberUpdated;
	chatJoinRequest: TgAirBot.ChatJoinRequest;
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
