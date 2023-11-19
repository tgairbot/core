import EventEmitter from "events";
import * as TgAirBot from "./types/tgairbot";
import { HandlerCallback } from "./types/handler-callback";
import { Wrapper } from "./wrappers/wrapper";
import { Middleware } from "./middlewares/middleware";
import { AnyUpdateType } from "@tgairbot/types";
import { BaseStorage } from "./fsm/storage/base";
import { MemoryStorage } from "./fsm/storage/memory";
import { StorageContext } from "./fsm/context";
import { WrapperStore } from "./wrappers/wrappers-store";
import { LifeType } from "./types/life-types";
import { Layout } from "./layouts/layout";

export class Handler extends EventEmitter {
	constructor(private _storage: BaseStorage = new MemoryStorage()) {
		super();
	}

	useStorage(storage: BaseStorage) {
		this._storage = storage;

		return this;
	}

	onUpdates<T extends keyof TgAirBot.UpdatedTypes = AnyUpdateType>(
		callback: LifeType<T>,
	) {
		this.on(
			"update",
			(type: AnyUpdateType, update: TgAirBot.Update<any>) => {
				return this._wrap(type, update, callback);
			},
		);
	}

	onMessage(callback: LifeType<"message">) {
		this.on("message", (update: TgAirBot.Update<"message">) => {
			return this._wrap("message", update, callback);
		});
	}

	onEditedMessage(callback: LifeType<"editedMessage">) {
		this.on("editedMessage", (update: TgAirBot.Update<"editedMessage">) =>
			this._wrap("editedMessage", update, callback),
		);
	}

	onChannelPost(callback: LifeType<"channelPost">) {
		this.on("channelPost", (update: TgAirBot.Update<"channelPost">) =>
			this._wrap("channelPost", update, callback),
		);
	}

	onEditedChannelPost(callback: LifeType<"editedChannelPost">) {
		this.on(
			"editedChannelPost",
			(update: TgAirBot.Update<"editedChannelPost">) =>
				this._wrap("editedChannelPost", update, callback),
		);
	}

	onPoll(callback: LifeType<"poll">) {
		this.on("poll", (update: TgAirBot.Update<"poll">) =>
			this._wrap("poll", update, callback),
		);
	}

	onPollAnswer(callback: LifeType<"pollAnswer">) {
		this.on("pollAnswer", (update: TgAirBot.Update<"pollAnswer">) =>
			this._wrap("pollAnswer", update, callback),
		);
	}

	onPreCheckoutQuery(callback: LifeType<"preCheckoutQuery">) {
		this.on(
			"preCheckoutQuery",
			(update: TgAirBot.Update<"preCheckoutQuery">) =>
				this._wrap("preCheckoutQuery", update, callback),
		);
	}

	onShippingQuery(callback: LifeType<"shippingQuery">) {
		this.on("shippingQuery", (update: TgAirBot.Update<"shippingQuery">) =>
			this._wrap("shippingQuery", update, callback),
		);
	}

	onCallbackQuery(callback: LifeType<"callbackQuery">) {
		this.on("callbackQuery", (update: TgAirBot.Update<"callbackQuery">) =>
			this._wrap("callbackQuery", update, callback),
		);
	}

	onMyChatMember(callback: LifeType<"myChatMember">) {
		this.on("myChatMember", (update: TgAirBot.Update<"myChatMember">) =>
			this._wrap("myChatMember", update, callback),
		);
	}

	onChatMember(callback: LifeType<"chatMember">) {
		this.on("chatMember", (update: TgAirBot.Update<"chatMember">) =>
			this._wrap("chatMember", update, callback),
		);
	}

	onChatJoinRequest(callback: LifeType<"chatJoinRequest">) {
		this.on(
			"chatJoinRequest",
			(update: TgAirBot.Update<"chatJoinRequest">) =>
				this._wrap("chatJoinRequest", update, callback),
		);
	}

	onInlineQuery(callback: LifeType<"inlineQuery">) {
		this.on("inlineQuery", (update: TgAirBot.Update<"inlineQuery">) =>
			this._wrap("inlineQuery", update, callback),
		);
	}

	onChosenInlineResult(callback: LifeType<"chosenInlineResult">) {
		this.on(
			"chosenInlineResult",
			(update: TgAirBot.Update<"chosenInlineResult">) =>
				this._wrap("chosenInlineResult", update, callback),
		);
	}

	private async _wrap<T extends keyof TgAirBot.UpdatedTypes>(
		type: T,
		update: TgAirBot.Update<T>,
		callback: LifeType<T>,
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
			await callback.runForUpdateHandler(wrapper);
		} else {
			await callback({ wrapper, params: wrapper.data });

			WrapperStore.deleteWrapper(wrapper.identId);
		}
	}
}

export const UpdateHandler = new Handler();
