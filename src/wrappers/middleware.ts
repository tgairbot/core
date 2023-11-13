import * as TgAirBot from "../types/tgairbot";
import { HandlerCallback } from "../types/handler-callback";
import { MiddlewareCallback } from "../types/middleware-callback";
import { Wrapper } from "./wrapper";
import { WrapperStore } from "./wrappers-store";

export class Middleware<T extends keyof TgAirBot.UpdatedTypes> {
	constructor(
		private _middleware: MiddlewareCallback<T>,
		private _callback: HandlerCallback<T> | Middleware<T>,
	) {}

	run(wrapper: Wrapper<T>, index: number = 0) {
		if (this._callback instanceof Middleware) {
			return this._runMiddleware(wrapper, index);
		} else {
			return this._runHandler(wrapper, index);
		}
	}

	private async _runMiddleware(wrapper: Wrapper<T>, index: number) {
		const next = () => {
			const handler = this._callback as Middleware<T>;

			return handler.run(wrapper, index + 1);
		};

		const res = await this._middleware(wrapper, next as any);

		if (!index) WrapperStore.deleteWrapper(wrapper.identId);

		return res;
	}

	private async _runHandler(wrapper: Wrapper<T>, index: number) {
		const next = () => {
			const handler = this._callback as HandlerCallback<T>;

			return handler({ wrapper, params: wrapper.data });
		};

		const res = await this._middleware(wrapper, next as any);

		if (index === 0) WrapperStore.deleteWrapper(wrapper.identId);

		return res;
	}
}
