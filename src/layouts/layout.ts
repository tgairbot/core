import * as TgAirBot from "@tgairbot/types";
import { LayoutOptions } from "../types/layout-options";
import { WrapperId } from "../wrappers/wrapper";
import { WrapperStore } from "../wrappers/wrappers-store";
import { LayoutContext } from "./layout-context";

export class Layout<T extends keyof TgAirBot.UpdatedTypes> {
	constructor(private readonly _options: LayoutOptions<T>) {}

	get name(): string {
		return this._options.name!;
	}

	runWith<P, D>(wrapperId: WrapperId) {
		const wrapper = WrapperStore.getWrapper(wrapperId);
		if (!wrapper) throw new Error("Wrapper not found");

		wrapper.assignLayout(this._options.name!);

		const layoutContext = Reflect.get(
			wrapper,
			"layoutContext",
		) as LayoutContext<T, P, D>;

		if (!layoutContext || this._options.name !== layoutContext?.name) {
			Object.defineProperty(wrapper, "layoutContext", {
				value: new LayoutContext(wrapper, this._options),
				enumerable: false,
				writable: true,
			});
		}

		return Reflect.get(wrapper, "layoutContext") as LayoutContext<T, P, D>;
	}
}
