import { BaseStorage, StateKey, StateType } from "./base";

export class MemoryRecord<T = any> {
	constructor(
		private _state?: StateType,
		private _data?: T,
	) {}

	getState() {
		return this._state;
	}

	setState(state?: StateType) {
		this._state = state ?? undefined;
	}

	getData() {
		return this._data;
	}

	setData(data?: T) {
		this._data = data;
	}
}

export class MemoryStorage<T> implements BaseStorage {
	private _storage: Record<StateKey, MemoryRecord>;

	constructor() {
		this._storage = {};
	}

	async getData(key: StateKey) {
		if (!this._storage[key]) this._initRecord(key);

		return this._storage[key].getData() as T;
	}

	async setState(key: StateKey, state?: StateType) {
		if (!this._storage[key]) this._initRecord(key);

		this._storage[key].setState(state);
	}

	async getState(key: StateKey) {
		if (!this._storage[key]) this._initRecord(key);

		return this._storage[key].getState() as StateType;
	}

	async setData(key: StateKey, data: T) {
		if (!this._storage[key]) this._initRecord(key);

		if (!data) {
			this._storage[key].setData();
		} else {
			this._storage[key].setData({
				...this._storage[key].getData(),
				...data,
			});
		}
	}

	async clear() {
		this._storage = {};
	}

	private _initRecord(key: StateKey) {
		this._storage[key] = new MemoryRecord();
	}
}
