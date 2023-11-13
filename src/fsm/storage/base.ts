export type StateType = string | number;
export type StateKey = string | number;

export abstract class BaseStorage<T = any> {
	async getData(key: StateKey): Promise<T> {
		throw new Error("Base storage [getData]: not implemented");
	}

	async setData(key: StateKey, data?: T) {
		throw new Error("Base storage [getData]: not implemented");
	}

	async getState(key: StateKey): Promise<StateType> {
		throw new Error("Base storage [getState]: not implemented");
	}

	async setState(key: StateKey, state?: StateType) {
		throw new Error("Base storage [setState]: not implemented");
	}

	async clear() {
		throw new Error("Base storage [clear]: not implemented");
	}
}
