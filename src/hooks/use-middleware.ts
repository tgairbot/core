import * as TgAirBot from "../types/tgairbot";
import { HandlerCallback } from "../types/handler-callback";
import { Middleware } from "../wrappers/middleware";
import { MiddlewareCallback } from "../types/middleware-callback";

export const useMiddleware = <T extends keyof TgAirBot.UpdatedTypes>(
	middleware: MiddlewareCallback<T>,
) => {
	return (callback: HandlerCallback<T> | Middleware<T>): Middleware<T> => {
		return new Middleware(middleware, callback);
	};
};
