import EventEmitter from "events";
import * as TgAirBot from "./types/tgairbot";
import { HandlerCallback } from "./types/handler-callback";
import { Wrapper } from "./wrappers/wrapper";
import { Middleware } from "./wrappers/middleware";
import { AnyUpdateType } from "./types/tgairbot";
import { BaseStorage } from "./fsm/storage/base";
import { MemoryStorage } from "./fsm/storage/memory";
import { StorageContext } from "./fsm/context";
import { WrapperStore } from "./wrappers/wrappers-store";

export class Handler extends EventEmitter {
	constructor(private _storage: BaseStorage = new MemoryStorage()) {
		super();
	}

	useStorage(storage: BaseStorage) {
		this._storage = storage;

		return this;
	}

	onUpdates<T extends keyof TgAirBot.UpdatedTypes = AnyUpdateType>(
		callback: HandlerCallback<T> | Middleware<T>,
	) {
		this.on(
			"update",
			(type: AnyUpdateType, update: TgAirBot.Update<any>) => {
				return this._wrap(type, update, callback);
			},
		);
	}

	onMessage(callback: HandlerCallback<"message"> | Middleware<"message">) {
		this.on("message", (update: TgAirBot.Update<"message">) => {
			return this._wrap("message", update, callback);
		});
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

	onEditedChannelPost(
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

	private async _wrap<T extends keyof TgAirBot.UpdatedTypes>(
		type: T,
		update: TgAirBot.Update<T>,
		callback: HandlerCallback<T> | Middleware<T>,
	) {
		const wrapper = new Wrapper<T>(type, update);
		const state = new StorageContext(wrapper.identId, this._storage);

		Object.defineProperty(wrapper, "state", {
			value: state,
			enumerable: false,
			writable: true,
		});

		WrapperStore.applyWrapper(wrapper.identId, wrapper);

		if (callback instanceof Middleware) {
			await callback.run(wrapper);
		} else {
			await callback({ wrapper, params: wrapper.data });

			WrapperStore.deleteWrapper(wrapper.identId);
		}
	}
}

export const UpdateHandler = new Handler();
