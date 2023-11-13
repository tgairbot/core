import { BaseStorage, StateKey, StateType } from "./storage/base";

export class StorageContext<T = any> {
	constructor(
		private _key: StateKey,
		private _storage: BaseStorage,
	) {}

	async getData(): Promise<T> {
		return this._storage.getData(this._key);
	}

	async setData(data?: T) {
		return this._storage.setData(this._key, data);
	}

	async getState(): Promise<StateType> {
		return this._storage.getState(this._key);
	}

	async setState(state?: StateType) {
		return this._storage.setState(this._key, state);
	}

	async clear() {
		await this._storage.setData(this._key);
		await this._storage.setState(this._key);
	}
}
