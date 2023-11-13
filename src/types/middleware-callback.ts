import { Wrapper } from "../wrappers/wrapper";
import * as TgAirBot from "../types/tgairbot";

export type MiddlewareCallbackParams<
	T extends keyof TgAirBot.UpdatedTypes = TgAirBot.AnyUpdateType,
> = [Wrapper<T>, <R = unknown>() => R];

export type MiddlewareCallback<
	T extends keyof TgAirBot.UpdatedTypes = TgAirBot.AnyUpdateType,
> = (...args: MiddlewareCallbackParams<T>) => void;
