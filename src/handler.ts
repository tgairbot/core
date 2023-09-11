import EventEmitter from "events";

import { CallbackQueryMapper } from "./mappers/callback-query";
import { ChatMapper } from "./mappers/chat";
import { ChosenInlineResultMapper } from "./mappers/inline-query/chosen-inline-result";
import { InlineQueryMapper } from "./mappers/inline-query/inline-query";
import { MessageMapper } from "./mappers/message";
import { PreCheckoutQueryMapper } from "./mappers/payments/pre-checkout-query";
import { ShippingQueryMapper } from "./mappers/payments/shipping-query";
import { PollMapper } from "./mappers/poll";
import { UpdateMapper } from "./mappers/update";
import * as Telegram from "./types/telegram";
import * as TgAirBot from "./types/tgairbot";

export class UpdatesEmitter extends EventEmitter {
	constructor() {
		super();

		this.onUpdates(() => {});
	}

	onUpdates(callback: (update: TgAirBot.Update) => any) {
		this.on("update", ({ update_id, ...updates }: Telegram.Update) => {
			Object.entries(updates).forEach(([key, update]) =>
				this.emit(key, update),
			);

			callback(UpdateMapper.toTAB({ update_id, ...updates }));
		});
	}

	onMessage(callback: (message: TgAirBot.Message) => any) {
		this.on("message", (message: Telegram.Message) =>
			callback(MessageMapper.toTAB(message)),
		);
	}

	onEditedMessage(callback: (editedMessage: TgAirBot.Message) => any) {
		this.on("edited_message", (message: Telegram.Message) =>
			callback(MessageMapper.toTAB(message)),
		);
	}

	onChannelPost(callback: (channelPost: TgAirBot.Message) => any) {
		this.on("channel_post", (message: Telegram.Message) =>
			callback(MessageMapper.toTAB(message)),
		);
	}

	editedChannelPost(callback: (editedChannelPost: TgAirBot.Message) => any) {
		this.on("edited_channel_post", (message: Telegram.Message) =>
			callback(MessageMapper.toTAB(message)),
		);
	}

	onPoll(callback: (poll: TgAirBot.Poll) => any) {
		this.on("poll", (message: Telegram.Poll) =>
			callback(PollMapper.toTAB(message)),
		);
	}

	onPollAnswer(callback: (pollAnswer: TgAirBot.PollAnswer) => any) {
		this.on("poll_answer", (message: Telegram.PollAnswer) =>
			callback(PollMapper.pollAnswerToTAB(message)),
		);
	}

	onPreCheckoutQuery(
		callback: (preChaeckoutQuery: TgAirBot.PreCheckoutQuery) => any,
	) {
		this.on("pre_checkout_query", (message: Telegram.PreCheckoutQuery) =>
			callback(PreCheckoutQueryMapper.toTAB(message)),
		);
	}

	onShippingQuery(callback: (shippigQuery: TgAirBot.ShippingQuery) => any) {
		this.on("pre_checkout_query", (message: Telegram.ShippingQuery) =>
			callback(ShippingQueryMapper.toTAB(message)),
		);
	}

	onCallbackQuery(callback: (callbackQuery: TgAirBot.CallbackQuery) => any) {
		this.on("callback_query", (message: Telegram.CallbackQuery) =>
			callback(CallbackQueryMapper.toTAB(message)),
		);
	}

	onMyChatMember(
		callback: (chatMemberUpdated: TgAirBot.ChatMemberUpdated) => any,
	) {
		this.on("my_chat_member", (message: Telegram.ChatMemberUpdated) =>
			callback(ChatMapper.chatMemberUpdatedToTab(message)),
		);
	}

	onChatMember(
		callback: (chatMemberUpdated: TgAirBot.ChatMemberUpdated) => any,
	) {
		this.on("chat_member", (message: Telegram.ChatMemberUpdated) =>
			callback(ChatMapper.chatMemberUpdatedToTab(message)),
		);
	}

	onChatJoinRequest(
		callback: (chatJoinRequest: TgAirBot.ChatJoinRequest) => any,
	) {
		this.on("chat_join_request", (message: Telegram.ChatJoinRequest) =>
			callback(ChatMapper.chatJoinRequestToTAB(message)),
		);
	}

	onInlineQuery(callback: (inlineQuery: TgAirBot.InlineQuery) => any) {
		this.on("inline_query", (message: Telegram.InlineQuery) =>
			callback(InlineQueryMapper.toTAB(message)),
		);
	}

	onChosenInlineResult(
		callback: (chosenInlineResult: TgAirBot.ChosenInlineResult) => any,
	) {
		this.on(
			"chosen_inline_result",
			(message: Telegram.ChosenInlineResult) =>
				callback(ChosenInlineResultMapper.toTAB(message)),
		);
	}
}

export const Handler = new UpdatesEmitter();
