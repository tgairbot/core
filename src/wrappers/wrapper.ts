import * as TgAirBot from "../types/tgairbot";
import { ConditionData } from "../types/tgairbot";

export class Wrapper<T extends keyof TgAirBot.UpdatedTypes> {
	private readonly _requestId: number;

	constructor(
		private _type: keyof TgAirBot.UpdatedTypes,
		private _update: TgAirBot.Update<T>,
	) {
		this._requestId = _update.updateId;
	}

	get id(): number {
		return this._requestId;
	}

	get update(): TgAirBot.Update<T> {
		return this._update;
	}

	get data(): ConditionData<T> {
		return this._update[this._type] as ConditionData<T>;
	}
}
