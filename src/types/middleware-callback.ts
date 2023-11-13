import { Wrapper } from "../wrappers/wrapper";
import * as TgAirBot from "../types/tgairbot";

export type MiddlewareCallback<T extends keyof TgAirBot.UpdatedTypes> = (
	wrapper: Wrapper<T>,
	next: <R = any>() => R,
) => void;
