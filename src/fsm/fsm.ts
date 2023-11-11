export type StateId = string | number;

export class FinaleStateMachine {
	private _state: Map<StateId, Record<string, any> | unknown> = new Map<
		StateId,
		Record<string, any> | unknown
	>();

	getState<T extends Record<string, any>>(key: StateId): T {
		const state = this._state.get(key);

		if (state) return state as T;

		return {} as T;
	}

	setState<T = any>(key: StateId, data: T) {
		const state = this.getState(key);

		const newState = { ...state, ...data };

		this._state.set(key, newState);

		return newState;
	}

	clear(key: StateId) {
		this._state.delete(key);
	}
}

export const GlobalFSM = new FinaleStateMachine();
