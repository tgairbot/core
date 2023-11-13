import { Wrapper, WrapperId } from "./wrapper";
import * as TgAirBot from "../types/tgairbot";

export class WrapperContainer {
	private _wrappers: Map<WrapperId, Wrapper<any>> = new Map();

	constructor() {}

	getWrapper<T extends keyof TgAirBot.UpdatedTypes>(id: WrapperId) {
		return this._wrappers.get(id) as Wrapper<T> | null;
	}

	applyWrapper(id: WrapperId, wrapper: Wrapper<any>) {
		this._wrappers.set(id, wrapper);
	}

	deleteWrapper(id: WrapperId) {
		this._wrappers.delete(id);
	}
}

export const WrapperStore = new WrapperContainer();
