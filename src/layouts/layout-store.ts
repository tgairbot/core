import * as TgAirBot from "@tgairbot/types";
import { Layout } from "./layout";

export class LayoutContainer {
	private _layouts: Map<string, Layout<any>> = new Map();

	constructor() {}

	getLayout<T extends keyof TgAirBot.UpdatedTypes>(name: string) {
		return this._layouts.get(name) as Layout<T> | null;
	}

	applyLayout(name: string, layout: Layout<any>) {
		this._layouts.set(name, layout);
	}

	deleteLayout(name: string) {
		this._layouts.delete(name);
	}
}

export const LayoutStore = new LayoutContainer();
