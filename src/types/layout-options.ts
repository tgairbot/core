import * as TgAirBot from "@tgairbot/types";
import { Wrapper } from "../wrappers/wrapper";
import { UseMiddlewareResult } from "../middlewares/use-middleware";

export type InitLayoutCallback<T extends keyof TgAirBot.UpdatedTypes, P> = (
	props: P,
	wrapper: Wrapper<T>,
) => unknown | Promise<unknown>;

export type DataLayout<
	T extends keyof TgAirBot.UpdatedTypes = TgAirBot.AnyUpdateType,
	D = any,
> = D | DataLayoutCallback<T, D>;
export type DataLayoutCallback<T extends keyof TgAirBot.UpdatedTypes, D> = (
	wrapper: Wrapper<T>,
) => D | Promise<D>;

export type LayoutOptions<
	T extends keyof TgAirBot.UpdatedTypes = TgAirBot.AnyUpdateType,
	P = any,
	D = any,
> = {
	name?: string;
	init?: InitLayoutCallback<T, P>;
	middlewares?: UseMiddlewareResult<T>[];
	data?: DataLayout<T, D>;
};
