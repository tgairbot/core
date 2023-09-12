import { Polling } from "./updates/polling";
import { BotOptions } from "./types/bot";
import { Webhook } from "./updates/webhook";

export class Bot {
	private readonly polling?: Polling;
	private readonly webhook?: Webhook;

	constructor(
		private readonly token: string,
		private readonly options?: BotOptions,
	) {
		if (this.options?.polling) {
			const options =
				typeof this.options.polling === "object"
					? this.options.polling
					: undefined;

			this.polling = new Polling(this.token, options);

			this.polling.start().then();
		} else if (this.options?.webhook) {
			if (this.options.webhook) {
				this.webhook = new Webhook(this.token, this.options.webhook);

				this.webhook.start().then();
			}
		} else if (this.options?.polling !== false) {
			this.polling = new Polling(this.token);

			this.polling.start().then();
		}

		if (!this.webhook && !this.polling) {
			throw new Error("Undefined type get updates!");
		}
	}
}
