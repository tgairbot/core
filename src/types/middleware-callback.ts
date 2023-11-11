import { Wrapper } from "../wrappers/wrapper";
import * as TgAirBot from "../types/tgairbot";

export type MiddlewareCallback<
	T extends keyof TgAirBot.UpdatedTypes,
	S = any,
> = (wrapper: Wrapper<T>, state: S, next: <R = any>() => R) => void;
