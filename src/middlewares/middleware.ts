import * as TgAirBot from "@tgairbot/types";
import { HandlerCallback } from "../types/handler-callback";
import { MiddlewareCallback } from "../types/middleware-callback";
import { Wrapper } from "../wrappers/wrapper";
import { WrapperStore } from "../wrappers/wrappers-store";
import { Layout } from "../layouts/layout";
import { LifeType } from "../types/life-types";

export class Middleware<T extends keyof TgAirBot.UpdatedTypes> {
	constructor(
		private _middleware: MiddlewareCallback<T>,
		private _callback: LifeType<T>,
	) {}

	runForLayout(wrapper: Wrapper<T>, index: number = 0) {
		if (this._callback instanceof Middleware) {
			return this._runMiddlewareForLayout(wrapper, index);
		} else {
			return this._runHandlerForLayout(wrapper, index);
		}
	}

	runForUpdateHandler(wrapper: Wrapper<T>, index: number = 0) {
		if (this._callback instanceof Middleware) {
			return this._runMiddlewareForUpdateHandler(wrapper, index);
		} else {
			return this._runHandlerForUpdateHandler(wrapper, index);
		}
	}

	private async _runMiddlewareForUpdateHandler(
		wrapper: Wrapper<T>,
		index: number,
	) {
		const next = () => {
			const handler = this._callback as Middleware<T>;

			return handler.runForUpdateHandler(wrapper, index + 1);
		};

		const res = await this._middleware(wrapper, next as any);

		if (!index) WrapperStore.deleteWrapper(wrapper.identId);

		return res;
	}

	private async _runHandlerForUpdateHandler(
		wrapper: Wrapper<T>,
		index: number,
	) {
		const next = () => {
			const handler = this._callback as HandlerCallback<T>;

			return handler({ wrapper, params: wrapper.data });
		};

		const res = await this._middleware(wrapper, next as any);

		if (index === 0) WrapperStore.deleteWrapper(wrapper.identId);

		return res;
	}

	private async _runMiddlewareForLayout(wrapper: Wrapper<T>, index: number) {
		const next = () => {
			const handler = this._callback as Middleware<T>;

			return handler.runForUpdateHandler(wrapper, index + 1);
		};

		return await this._middleware(wrapper, next as any);
	}

	private async _runHandlerForLayout(wrapper: Wrapper<T>, index: number) {
		const next = () => {
			const handler = this._callback as HandlerCallback<T>;

			return handler({ wrapper, params: wrapper.data });
		};

		return await this._middleware(wrapper, next as any);
	}
}
