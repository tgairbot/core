import * as TgAirBot from "../types/tgairbot";
import { ConditionData } from "../types/tgairbot";

export type WrapperId = string | number | "DEFAULT_WRAPPER_ID";

export class Wrapper<T extends keyof TgAirBot.UpdatedTypes> {
	private readonly _identId: WrapperId;

	constructor(
		private _type: keyof TgAirBot.UpdatedTypes,
		private _update: TgAirBot.Update<T>,
	) {
		const data = this.data as TgAirBot.Message;

		this._identId =
			data?.from?.id || data?.chat?.id || "DEFAULT_WRAPPER_ID";
	}

	get identId(): WrapperId {
		return this._identId;
	}

	get update(): TgAirBot.Update<T> {
		return this._update;
	}

	get data(): ConditionData<T> {
		return this._update[this._type] as ConditionData<T>;
	}
}
