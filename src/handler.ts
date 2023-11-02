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
import { FilterFn } from "./types/filter";
import { HandlerCallback } from "./types/handler-callback";

export class Handler extends EventEmitter {
	constructor() {
		super();

		this.onUpdates(() => {});
	}

	onUpdates(
		callback: HandlerCallback<TgAirBot.Update>,
		...filters: FilterFn<TgAirBot.Update>[]
	) {
		this.on("update", ({ update_id, ...updates }: Telegram.Update) => {
			Object.entries(updates).forEach(([key, update]) =>
				this.emit(key, update),
			);

			const mappedMessage = UpdateMapper.toTAB({ update_id, ...updates });

			if (!this._approveByFilter(mappedMessage, filters)) return;

			callback(mappedMessage);
		});

		return this;
	}

	onMessage(
		callback: HandlerCallback<TgAirBot.Message>,
		...filters: FilterFn<TgAirBot.Message>[]
	) {
		this.on("message", (message: Telegram.Message) => {
			const mappedMessage = MessageMapper.toTAB(message);

			if (!this._approveByFilter(mappedMessage, filters)) return;

			callback(mappedMessage);
		});

		return this;
	}

	onEditedMessage(
		callback: HandlerCallback<TgAirBot.Message>,
		...filters: FilterFn<TgAirBot.Message>[]
	) {
		this.on("edited_message", (message: Telegram.Message) => {
			const mappedMessage = MessageMapper.toTAB(message);

			if (!this._approveByFilter(mappedMessage, filters)) return;

			callback(mappedMessage);
		});

		return this;
	}

	onChannelPost(
		callback: HandlerCallback<TgAirBot.Message>,
		...filters: FilterFn<TgAirBot.Message>[]
	) {
		this.on("channel_post", (message: Telegram.Message) => {
			const mappedMessage = MessageMapper.toTAB(message);

			if (!this._approveByFilter(mappedMessage, filters)) return;

			callback(mappedMessage);
		});

		return this;
	}

	editedChannelPost(
		callback: HandlerCallback<TgAirBot.Message>,
		...filters: FilterFn<TgAirBot.Message>[]
	) {
		this.on("edited_channel_post", (message: Telegram.Message) => {
			const mappedMessage = MessageMapper.toTAB(message);

			if (!this._approveByFilter(mappedMessage, filters)) return;

			callback(mappedMessage);
		});

		return this;
	}

	onPoll(
		callback: HandlerCallback<TgAirBot.Poll>,
		...filters: FilterFn<TgAirBot.Poll>[]
	) {
		this.on("poll", (message: Telegram.Poll) => {
			const mappedMessage = PollMapper.toTAB(message);

			if (!this._approveByFilter(mappedMessage, filters)) return;

			callback(mappedMessage);
		});

		return this;
	}

	onPollAnswer(
		callback: HandlerCallback<TgAirBot.PollAnswer>,
		...filters: FilterFn<TgAirBot.PollAnswer>[]
	) {
		this.on("poll_answer", (message: Telegram.PollAnswer) => {
			const mappedMessage = PollMapper.pollAnswerToTAB(message);

			if (!this._approveByFilter(mappedMessage, filters)) return;

			callback(mappedMessage);
		});

		return this;
	}

	onPreCheckoutQuery(
		callback: HandlerCallback<TgAirBot.PreCheckoutQuery>,
		...filters: FilterFn<TgAirBot.PreCheckoutQuery>[]
	) {
		this.on("pre_checkout_query", (message: Telegram.PreCheckoutQuery) => {
			const mappedMessage = PreCheckoutQueryMapper.toTAB(message);

			if (!this._approveByFilter(mappedMessage, filters)) return;

			callback(mappedMessage);
		});

		return this;
	}

	onShippingQuery(
		callback: HandlerCallback<TgAirBot.ShippingQuery>,
		...filters: FilterFn<TgAirBot.ShippingQuery>[]
	) {
		this.on("pre_checkout_query", (message: Telegram.ShippingQuery) => {
			const mappedMessage = ShippingQueryMapper.toTAB(message);

			if (!this._approveByFilter(mappedMessage, filters)) return;

			callback(mappedMessage);
		});

		return this;
	}

	onCallbackQuery(
		callback: HandlerCallback<TgAirBot.CallbackQuery>,
		...filters: FilterFn<TgAirBot.CallbackQuery>[]
	) {
		this.on("callback_query", (message: Telegram.CallbackQuery) => {
			const mappedMessage = CallbackQueryMapper.toTAB(message);

			if (!this._approveByFilter(mappedMessage, filters)) return;

			callback(mappedMessage);
		});

		return this;
	}

	onMyChatMember(
		callback: HandlerCallback<TgAirBot.ChatMemberUpdated>,
		...filters: FilterFn<TgAirBot.ChatMemberUpdated>[]
	) {
		this.on("my_chat_member", (message: Telegram.ChatMemberUpdated) => {
			const mappedMessage = ChatMapper.chatMemberUpdatedToTab(message);

			if (!this._approveByFilter(mappedMessage, filters)) return;

			callback(mappedMessage);
		});

		return this;
	}

	onChatMember(
		callback: HandlerCallback<TgAirBot.ChatMemberUpdated>,
		...filters: FilterFn<TgAirBot.ChatMemberUpdated>[]
	) {
		this.on("chat_member", (message: Telegram.ChatMemberUpdated) => {
			const mappedMessage = ChatMapper.chatMemberUpdatedToTab(message);

			if (!this._approveByFilter(mappedMessage, filters)) return;

			callback(mappedMessage);
		});

		return this;
	}

	onChatJoinRequest(
		callback: HandlerCallback<TgAirBot.ChatJoinRequest>,
		...filters: FilterFn<TgAirBot.ChatJoinRequest>[]
	) {
		this.on("chat_join_request", (message: Telegram.ChatJoinRequest) => {
			const mappedMessage = ChatMapper.chatJoinRequestToTAB(message);

			if (!this._approveByFilter(mappedMessage, filters)) return;

			callback(mappedMessage);
		});

		return this;
	}

	onInlineQuery(
		callback: HandlerCallback<TgAirBot.InlineQuery>,
		...filters: FilterFn<TgAirBot.InlineQuery>[]
	) {
		this.on("inline_query", (message: Telegram.InlineQuery) => {
			const mappedMessage = InlineQueryMapper.toTAB(message);

			if (!this._approveByFilter(mappedMessage, filters)) return;

			callback(mappedMessage);
		});

		return this;
	}

	onChosenInlineResult(
		callback: HandlerCallback<TgAirBot.ChosenInlineResult>,
		...filters: FilterFn<TgAirBot.ChosenInlineResult>[]
	) {
		this.on(
			"chosen_inline_result",
			(message: Telegram.ChosenInlineResult) => {
				const mappedMessage = ChosenInlineResultMapper.toTAB(message);

				if (!this._approveByFilter(mappedMessage, filters)) return;

				callback(mappedMessage);
			},
		);

		return this;
	}

	private _approveByFilter<M>(mappedMessage: M, filters: FilterFn<M>[]) {
		return filters.every(filter => filter(mappedMessage));
	}
}
