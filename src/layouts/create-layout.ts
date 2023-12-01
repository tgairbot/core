import * as TgAirBot from "@tgairbot/types";
import { Layout } from "./layout";
import { LayoutOptions } from "../types/layout-options";
import { LayoutStore } from "./layout-store";

type CreateLayoutRes<T extends keyof TgAirBot.UpdatedTypes> = Layout<T>;

export function createLayout<
	T extends keyof TgAirBot.UpdatedTypes,
	P = any,
	D = any,
>(name: string, options?: LayoutOptions<T, P, D>): CreateLayoutRes<T>;
export function createLayout<
	T extends keyof TgAirBot.UpdatedTypes,
	P = any,
	D = any,
>(options: LayoutOptions<T, P, D>): CreateLayoutRes<T>;
export function createLayout<
	T extends keyof TgAirBot.UpdatedTypes,
	P = any,
	D = any,
>(...args: any[]): CreateLayoutRes<T> {
	const layoutOptions: LayoutOptions<T, P, D> = {};

	args.map(arg => {
		if (!arg) return;

		if (typeof arg === "string") {
			layoutOptions.name = arg;
		} else {
			Object.assign(layoutOptions, arg);
		}
	});

	if (!layoutOptions.name) {
		layoutOptions.name = "default";
	}

	const layout = new Layout(layoutOptions);

	LayoutStore.applyLayout(layoutOptions.name!, layout);

	return layout;
}
