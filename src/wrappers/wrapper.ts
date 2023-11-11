import * as TgAirBot from "../types/tgairbot";
import { ConditionData } from "../types/tgairbot";
import { MakeId } from "../utils/make-id";
import { GlobalFSM } from "../fsm/fsm";

export class Wrapper<T extends keyof TgAirBot.UpdatedTypes> {
	private readonly _identId: number | string;

	constructor(
		private _type: keyof TgAirBot.UpdatedTypes,
		private _update: TgAirBot.Update<T>,
	) {
		const data = this.data as TgAirBot.Message;

		this._identId = data?.from?.id || data?.chat?.id || MakeId(24);
	}

	get identId(): string | number {
		return this._identId;
	}

	get update(): TgAirBot.Update<T> {
		return this._update;
	}

	get data(): ConditionData<T> {
		return this._update[this._type] as ConditionData<T>;
	}
}
