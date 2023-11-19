import * as TgAirBot from "@tgairbot/types";
import { HandlerCallback } from "../types/handler-callback";
import { Middleware } from "./middleware";
import { MiddlewareCallback } from "../types/middleware-callback";
import { Layout } from "../layouts/layout";
import { LifeType } from "../types/life-types";

export type UseMiddlewareResult<T extends keyof TgAirBot.UpdatedTypes> = (
	callback: LifeType<T>,
) => Middleware<T>;

export const useMiddleware = <T extends keyof TgAirBot.UpdatedTypes>(
	middleware: MiddlewareCallback<T>,
): UseMiddlewareResult<T> => {
	return (callback: LifeType<T>): Middleware<T> => {
		return new Middleware(middleware, callback);
	};
};
