import { WrapperId } from "../wrappers/wrapper";
import { StorageContext } from "./context";
import { WrapperStore } from "../wrappers/wrappers-store";

export const useStorage = <S = any>(
	wrapperId: WrapperId,
): StorageContext<S> => {
	if (!wrapperId) throw new Error("Not found wrapper id");

	const wrapper = WrapperStore.getWrapper(wrapperId)!;

	return Reflect.get(wrapper, "state") as StorageContext<S>;
};
