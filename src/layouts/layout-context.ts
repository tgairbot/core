import { Wrapper } from "../wrappers/wrapper";
import * as TgAirBot from "@tgairbot/types";
import {
	DataLayout,
	DataLayoutCallback,
	InitLayoutCallback,
	LayoutOptions,
} from "../types/layout-options";
import { Middleware } from "../middlewares/middleware";

export class LayoutContext<T extends keyof TgAirBot.UpdatedTypes, P, D> {
	private _props: P | undefined = undefined;
	private _data: DataLayout<T, D> | undefined;

	constructor(
		private readonly _wrapper: Wrapper<T>,
		private readonly _options: LayoutOptions<T>,
	) {
		this._data = this._options.data;
	}

	async in(props?: P) {
		if (props) this._props = props;

		if (this._data && typeof this._data === "function") {
			this._data = await (this._data as DataLayoutCallback<T, D>)(
				this._wrapper,
			);
		}

		if (!this._options.init) return;

		if (this._options.middlewares) {
			const chain = [...this._options.middlewares].reverse();

			const middleware = chain.reduce(
				(first, next, currentIndex) => {
					if (currentIndex === 0) {
						const callback = first as InitLayoutCallback<T, P>;

						return next(params =>
							callback(props as P, this._wrapper),
						);
					} else {
						const callback = first as Middleware<T>;

						return next(callback);
					}
				},
				this._options.init as InitLayoutCallback<T, P> | Middleware<T>,
			) as Middleware<T>;

			await middleware.runForLayout(this._wrapper);
		} else {
			this._options.init(props, this._wrapper);
		}
	}

	get name(): string {
		return this._options.name || "default";
	}

	getProps(): P | undefined {
		return this._props;
	}

	setProps(props?: P) {
		if (typeof this._props === "object" && typeof props === "object") {
			this._props = { ...this._props, ...props };
		} else {
			this._props = props;
		}
	}

	getData(): D {
		return this._data as D;
	}

	setData(data?: D) {
		if (typeof this._data === "object" && typeof data === "object") {
			this._data = { ...this._data, ...data };
		} else {
			this._data = data;
		}
	}
}
