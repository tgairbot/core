import { Wrapper } from "../wrappers/wrapper";
import * as TgAirBot from "../types/tgairbot";

export type HandlerCallback<
	T extends keyof TgAirBot.UpdatedTypes,
	S = Record<string, any>,
> = (params: {
	wrapper: Wrapper<T>;
	params: TgAirBot.ConditionData<T>;
	state?: S;
}) => void;
