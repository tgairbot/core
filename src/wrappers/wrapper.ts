import * as TgAirBot from "@tgairbot/types";
import { Layout } from "../layouts/layout";
import { LayoutStore } from "../layouts/layout-store";

export type WrapperId = string | number | "DEFAULT_WRAPPER_ID";

export class Wrapper<T extends keyof TgAirBot.UpdatedTypes> {
	private readonly _identId: WrapperId;
	private readonly _data: TgAirBot.ConditionData<T>;
	private _layout: Layout<T>;

	constructor(
		private _type: keyof TgAirBot.UpdatedTypes,
		private _update: TgAirBot.Update<T>,
	) {
		this._data = this._update[this._type] as TgAirBot.ConditionData<T>;

		this._identId =
			(this._data as TgAirBot.ConditionData<"message">)?.from?.id ||
			(this._data as TgAirBot.ConditionData<"message">)?.chat?.id ||
			"DEFAULT_WRAPPER_ID";
	}

	get identId(): WrapperId {
		return this._identId;
	}

	get update(): TgAirBot.Update<T> {
		return this._update;
	}

	get data(): TgAirBot.ConditionData<T> {
		return this._data;
	}

	get layout(): Layout<T> {
		return this._layout;
	}

	assignLayout(name: string) {
		const layout = LayoutStore.getLayout(name);
		if (!layout) throw new Error("Layout not found");

		this._layout = layout;
	}
}
