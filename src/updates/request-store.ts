import { Wrapper } from "../wrappers/wrapper";
import * as TgAirBot from "../types/tgairbot";

export class RequestStore {
	private _requests: Map<number, Wrapper<any>> = new Map();

	constructor() {}

	getWrapper<T extends keyof TgAirBot.UpdatedTypes>(id: number) {
		return this._requests.get(id) as Wrapper<T> | undefined;
	}

	apply(wrapper: Wrapper<any>) {
		// this._requests.set(wrapper.id, wrapper);
	}

	delete(id: number) {
		this._requests.delete(id);
	}
}

export const WrapperStore = new RequestStore();
