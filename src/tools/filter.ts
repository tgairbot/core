import * as TgAirBot from "../types/tgairbot";

type ConditionFn = () => unknown;
type AsyncConditionFn = () => Promise<unknown>;
type ConditionType = string | RegExp | boolean | ConditionFn | AsyncConditionFn;
type CallbackFn<T> = (arg: T) => void | Promise<void>;
type CallbackArgs<
	T extends string | RegExp | boolean | ConditionFn | AsyncConditionFn,
> = T extends string
	? CallbackFn<string>
	: T extends RegExp
	? CallbackFn<RegExpMatchArray>
	: T extends boolean
	? CallbackFn<boolean>
	: T extends ConditionFn
	? CallbackFn<ReturnType<ConditionFn>>
	: T extends AsyncConditionFn
	? CallbackFn<ReturnType<AsyncConditionFn>>
	: unknown;

export const filter = <C extends ConditionType, T = any, M = TgAirBot.Message>(
	condition: C,
	message: M,
	callback?: CallbackArgs<C>,
) => {
	if (typeof condition === "string") {
		return filterString(
			condition,
			message as TgAirBot.Message,
			callback as CallbackArgs<string>,
		);
	}

	if (typeof condition === "boolean") {
		return filterBoolean(
			condition,
			message,
			callback as CallbackArgs<boolean>,
		);
	}

	if (condition instanceof RegExp) {
		return filterRegexp(
			condition,
			message as TgAirBot.Message,
			callback as CallbackArgs<RegExp>,
		);
	}

	if (typeof condition === "function") {
		return filterFunction(
			condition,
			message,
			callback as CallbackArgs<ConditionFn>,
		);
	}

	throw new Error("Unknown filter");
};

const filterString = <M extends TgAirBot.Message>(
	str: string,
	message: M,
	callback?: CallbackArgs<string>,
) => {
	const text = message.text || message.caption || "";

	if (!callback) return text === str;
	if (text !== str) return undefined as void;

	return callback(str);
};

const filterBoolean = <M = TgAirBot.Message>(
	bool: boolean,
	message: M,
	callback?: CallbackArgs<boolean>,
) => {
	if (!callback) return bool;
	if (!bool) return undefined as void;

	return callback(bool);
};

const filterRegexp = <M extends TgAirBot.Message>(
	regexp: RegExp,
	message: M,
	callback?: CallbackArgs<RegExp>,
) => {
	const text = message.text || message.caption || "";

	const match = text.match(regexp);

	if (!callback) return match;
	if (!match) return undefined as void;

	return callback(match);
};

const filterFunction = async <M>(
	filterFn: ConditionFn,
	message: M,
	callback?: CallbackArgs<ConditionFn>,
) => {
	const res = await filterFn();

	if (!callback) return res;
	if (!res) return undefined as void;

	return callback(res);
};
