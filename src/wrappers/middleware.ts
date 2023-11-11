import * as TgAirBot from "../types/tgairbot";
import { HandlerCallback } from "../types/handler-callback";
import { MiddlewareCallback } from "../types/middleware-callback";
import { Wrapper } from "./wrapper";
import { GlobalFSM } from "../fsm/fsm";

export class Middleware<T extends keyof TgAirBot.UpdatedTypes> {
	constructor(
		private _middleware: MiddlewareCallback<T>,
		private _callback: HandlerCallback<T> | Middleware<T>,
	) {}

	run(wrapper: Wrapper<T>): any {
		const state = GlobalFSM.getState(wrapper.identId);

		if (this._callback instanceof Middleware) {
			return this._middleware(wrapper, state, () => {
				const handler = this._callback as Middleware<T>;

				return handler.run(wrapper);
			});
		} else {
			const next = <R>(): R => {
				const handler = this._callback as HandlerCallback<T>;

				return handler({
					wrapper,
					params: wrapper.data,
					state: GlobalFSM.getState(wrapper.identId),
				}) as R;
			};

			return this._middleware(wrapper, state, next);
		}
	}
}
