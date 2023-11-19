import { WrapperId } from "../wrappers/wrapper";
import * as TgAirBot from "@tgairbot/types";
import { WrapperStore } from "../wrappers/wrappers-store";
import { LayoutStore } from "./layout-store";

export const useLayout = <
	T extends keyof TgAirBot.UpdatedTypes = TgAirBot.AnyUpdateType,
	P = any,
	D = any,
>(
	wrapperId: WrapperId,
	name: string = "default",
) => {
	const wrapper = WrapperStore.getWrapper<T>(wrapperId);
	if (!wrapper) return;

	const layout = LayoutStore.getLayout<T>(name);
	if (!layout) return;

	return layout.runWith<P, D>(wrapper.identId);
};
