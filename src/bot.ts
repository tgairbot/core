import { Polling } from "./updates/polling";
import { BotOptions } from "./types/bot";
import { Webhook } from "./updates/webhook";
import { Methods } from "./api/methods";

export class Bot {
	private readonly _polling?: Polling;
	private readonly _webhook?: Webhook;
	private readonly _methods?: Methods;

	constructor(
		private readonly token: string,
		private readonly options?: BotOptions,
	) {
		if (this.options?.polling) {
			const options =
				typeof this.options.polling === "object"
					? this.options.polling
					: undefined;

			this._polling = new Polling(this.token, options);

			this._polling.start().then();
		} else if (this.options?.webhook) {
			if (this.options.webhook) {
				this._webhook = new Webhook(this.token, this.options.webhook);

				this._webhook.start().then();
			}
		} else if (this.options?.polling !== false) {
			this._polling = new Polling(this.token);

			this._polling.start().then();
		}

		if (!this._webhook && !this._polling) {
			throw new Error("Undefined type get updates!");
		}

		this._methods = new Methods(this.token);
	}

	get methods(): Methods {
		return this._methods!;
	}
}
