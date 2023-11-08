import { Wrapper } from "../wrappers/wrapper";
import * as TgAirBot from "../types/tgairbot";

export type MiddlewareCallback<T extends keyof TgAirBot.UpdatedTypes> = (
	wrapper: Wrapper<T>,
	update: TgAirBot.Update<T>,
	next: <R = any>() => R,
) => void;
