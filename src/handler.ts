import EventEmitter from "events";
import { UpdateMapper } from "./mappers/update";
import * as Telegram from "./types/telegram";
import * as TgAirBot from "./types/tgairbot";
import { HandlerCallback } from "./types/handler-callback";
import { Wrapper } from "./wrappers/wrapper";
import { Middleware } from "./wrappers/middleware";
import { GlobalFSM } from "./fsm/fsm";

export class Handler extends EventEmitter {
	constructor() {
		super();

		this.onUpdates(() => {});
	}

	onUpdates<T extends keyof TgAirBot.UpdatedTypes>(
		callback: HandlerCallback<T> | Middleware<T>,
	) {
		this.on("update", (update: Telegram.Update) => {
			const { updateId, ...updates } = UpdateMapper.toTAB(update);

			Object.keys(updates).forEach(key => {
				const updateType = key as keyof TgAirBot.UpdatedTypes;

				this.emit(updateType, { updateId, ...updates });

				this._wrap(updateType, { updateId, ...updates }, callback);
			});
		});
	}

	onMessage(callback: HandlerCallback<"message"> | Middleware<"message">) {
		this.on("message", (update: TgAirBot.Update<"message">) =>
			this._wrap("message", update, callback),
		);
	}

	onEditedMessage(
		callback:
			| HandlerCallback<"editedMessage">
			| Middleware<"editedMessage">,
	) {
		this.on("editedMessage", (update: TgAirBot.Update<"editedMessage">) =>
			this._wrap("editedMessage", update, callback),
		);
	}

	onChannelPost(
		callback: HandlerCallback<"channelPost"> | Middleware<"channelPost">,
	) {
		this.on("channelPost", (update: TgAirBot.Update<"channelPost">) =>
			this._wrap("channelPost", update, callback),
		);
	}

	editedChannelPost(
		callback:
			| HandlerCallback<"editedChannelPost">
			| Middleware<"editedChannelPost">,
	) {
		this.on(
			"editedChannelPost",
			(update: TgAirBot.Update<"editedChannelPost">) =>
				this._wrap("editedChannelPost", update, callback),
		);
	}

	onPoll(callback: HandlerCallback<"poll"> | Middleware<"poll">) {
		this.on("poll", (update: TgAirBot.Update<"poll">) =>
			this._wrap("poll", update, callback),
		);
	}

	onPollAnswer(
		callback: HandlerCallback<"pollAnswer"> | Middleware<"pollAnswer">,
	) {
		this.on("pollAnswer", (update: TgAirBot.Update<"pollAnswer">) =>
			this._wrap("pollAnswer", update, callback),
		);
	}

	onPreCheckoutQuery(
		callback:
			| HandlerCallback<"preCheckoutQuery">
			| Middleware<"preCheckoutQuery">,
	) {
		this.on(
			"preCheckoutQuery",
			(update: TgAirBot.Update<"preCheckoutQuery">) =>
				this._wrap("preCheckoutQuery", update, callback),
		);
	}

	onShippingQuery(
		callback:
			| HandlerCallback<"shippingQuery">
			| Middleware<"shippingQuery">,
	) {
		this.on("shippingQuery", (update: TgAirBot.Update<"shippingQuery">) =>
			this._wrap("shippingQuery", update, callback),
		);
	}

	onCallbackQuery(
		callback:
			| HandlerCallback<"callbackQuery">
			| Middleware<"callbackQuery">,
	) {
		this.on("callbackQuery", (update: TgAirBot.Update<"callbackQuery">) =>
			this._wrap("callbackQuery", update, callback),
		);
	}

	onMyChatMember(
		callback: HandlerCallback<"myChatMember"> | Middleware<"myChatMember">,
	) {
		this.on("myChatMember", (update: TgAirBot.Update<"myChatMember">) =>
			this._wrap("myChatMember", update, callback),
		);
	}

	onChatMember(
		callback: HandlerCallback<"chatMember"> | Middleware<"chatMember">,
	) {
		this.on("chatMember", (update: TgAirBot.Update<"chatMember">) =>
			this._wrap("chatMember", update, callback),
		);
	}

	onChatJoinRequest(
		callback:
			| HandlerCallback<"chatJoinRequest">
			| Middleware<"chatJoinRequest">,
	) {
		this.on(
			"chatJoinRequest",
			(update: TgAirBot.Update<"chatJoinRequest">) =>
				this._wrap("chatJoinRequest", update, callback),
		);
	}

	onInlineQuery(
		callback: HandlerCallback<"inlineQuery"> | Middleware<"inlineQuery">,
	) {
		this.on("inlineQuery", (update: TgAirBot.Update<"inlineQuery">) =>
			this._wrap("inlineQuery", update, callback),
		);
	}

	onChosenInlineResult(
		callback:
			| HandlerCallback<"chosenInlineResult">
			| Middleware<"chosenInlineResult">,
	) {
		this.on(
			"chosenInlineResult",
			(update: TgAirBot.Update<"chosenInlineResult">) =>
				this._wrap("chosenInlineResult", update, callback),
		);
	}

	private _wrap<T extends keyof TgAirBot.UpdatedTypes>(
		type: T,
		update: TgAirBot.Update<T>,
		callback: HandlerCallback<T> | Middleware<T>,
	) {
		const wrapper = new Wrapper<T>(type, update);

		if (callback instanceof Middleware) {
			callback.run(wrapper);
		} else {
			callback({
				wrapper,
				params: wrapper.data,
				state: GlobalFSM.getState(wrapper.identId),
			});
		}
	}
}

export const UpdateHandler = new Handler();
