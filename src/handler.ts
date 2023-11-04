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
import { HandlerCallback } from "./types/handler-callback";

export class Handler extends EventEmitter {
	constructor() {
		super();

		this.onUpdates(() => {});
	}

	onUpdates(callback: HandlerCallback<TgAirBot.Update>) {
		this.on("update", ({ update_id, ...updates }: Telegram.Update) => {
			Object.entries(updates).forEach(([key, update]) =>
				this.emit(key, update),
			);

			callback(UpdateMapper.toTAB({ update_id, ...updates }));
		});
	}

	onMessage(callback: HandlerCallback<TgAirBot.Message>) {
		this.on("message", (message: Telegram.Message) =>
			callback(MessageMapper.toTAB(message)),
		);
	}

	onEditedMessage(callback: HandlerCallback<TgAirBot.Message>) {
		this.on("edited_message", (message: Telegram.Message) =>
			callback(MessageMapper.toTAB(message)),
		);
	}

	onChannelPost(callback: HandlerCallback<TgAirBot.Message>) {
		this.on("channel_post", (message: Telegram.Message) =>
			callback(MessageMapper.toTAB(message)),
		);
	}

	editedChannelPost(callback: HandlerCallback<TgAirBot.Message>) {
		this.on("edited_channel_post", (message: Telegram.Message) =>
			callback(MessageMapper.toTAB(message)),
		);
	}

	onPoll(callback: HandlerCallback<TgAirBot.Poll>) {
		this.on("poll", (message: Telegram.Poll) =>
			callback(PollMapper.toTAB(message)),
		);
	}

	onPollAnswer(callback: HandlerCallback<TgAirBot.PollAnswer>) {
		this.on("poll_answer", (message: Telegram.PollAnswer) =>
			callback(PollMapper.pollAnswerToTAB(message)),
		);
	}

	onPreCheckoutQuery(callback: HandlerCallback<TgAirBot.PreCheckoutQuery>) {
		this.on("pre_checkout_query", (message: Telegram.PreCheckoutQuery) =>
			callback(PreCheckoutQueryMapper.toTAB(message)),
		);
	}

	onShippingQuery(callback: HandlerCallback<TgAirBot.ShippingQuery>) {
		this.on("pre_checkout_query", (message: Telegram.ShippingQuery) =>
			callback(ShippingQueryMapper.toTAB(message)),
		);
	}

	onCallbackQuery(callback: HandlerCallback<TgAirBot.CallbackQuery>) {
		this.on("callback_query", (message: Telegram.CallbackQuery) =>
			callback(CallbackQueryMapper.toTAB(message)),
		);
	}

	onMyChatMember(callback: HandlerCallback<TgAirBot.ChatMemberUpdated>) {
		this.on("my_chat_member", (message: Telegram.ChatMemberUpdated) =>
			callback(ChatMapper.chatMemberUpdatedToTab(message)),
		);
	}

	onChatMember(callback: HandlerCallback<TgAirBot.ChatMemberUpdated>) {
		this.on("chat_member", (message: Telegram.ChatMemberUpdated) =>
			callback(ChatMapper.chatMemberUpdatedToTab(message)),
		);
	}

	onChatJoinRequest(callback: HandlerCallback<TgAirBot.ChatJoinRequest>) {
		this.on("chat_join_request", (message: Telegram.ChatJoinRequest) =>
			callback(ChatMapper.chatJoinRequestToTAB(message)),
		);
	}

	onInlineQuery(callback: HandlerCallback<TgAirBot.InlineQuery>) {
		this.on("inline_query", (message: Telegram.InlineQuery) =>
			callback(InlineQueryMapper.toTAB(message)),
		);
	}

	onChosenInlineResult(
		callback: HandlerCallback<TgAirBot.ChosenInlineResult>,
	) {
		this.on(
			"chosen_inline_result",
			(message: Telegram.ChosenInlineResult) =>
				callback(ChosenInlineResultMapper.toTAB(message)),
		);
	}
}

export const UpdateHandler = new Handler();
