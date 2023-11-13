import { Wrapper } from "../wrappers/wrapper";
import * as TgAirBot from "../types/tgairbot";

export type HandlerCallbackParams<
	T extends keyof TgAirBot.UpdatedTypes = TgAirBot.AnyUpdateType,
> = {
	wrapper: Wrapper<T>;
	params: TgAirBot.ConditionData<T>;
};

export type HandlerCallback<
	T extends keyof TgAirBot.UpdatedTypes = TgAirBot.AnyUpdateType,
> = (params: HandlerCallbackParams<T>) => void;
