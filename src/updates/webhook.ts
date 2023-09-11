import { debug } from "console";

import { Client } from "../api/client";
import { HandleFn, Server } from "../api/server";
import { Handler } from "../handler";
import { Response } from "../types/server";
import { Update } from "../types/telegram/update";
import { SetWebhook, WebhookOptions } from "../types/webhook";
import { WrapRequest } from "../types/wrap-request";

export class Webhook {
	private client: Client;
	private server: Server;
	private options: SetWebhook;

	constructor(
		private readonly token: string,
		private params: WebhookOptions,
	) {
		this.client = new Client("setWebhook", this.token);
		this.options = this._parseOptions();
		this.server = new Server("localhost", this.params.port || 443);
	}

	async start() {
		const { body } = await this.client.send<
			WrapRequest<boolean>,
			SetWebhook
		>(this.options);

		if (body.ok && body.result) {
			this.server.setHandle = this._handleResponse.bind(this) as HandleFn;

			this.server.listen(({ host, port }) => {
				console.log(`Server start on: `, host, port);
			});
		} else {
			throw new Error("Error set webhook!!!");
		}
	}

	private async _handleResponse({ body }: Response<Update>): Promise<void> {
		if (this.params.log)
			debug("Handle update: ", JSON.stringify(body, null, 2));

		Handler.emit("update", body);
	}

	private _parseOptions() {
		const options: SetWebhook = {
			url: this.params.domain,
			ip_address: this.params.ipAddress,
		};

		if (
			this.params.maxConnections &&
			typeof this.params.maxConnections === "number"
		) {
			if (this.params.maxConnections <= 0) {
				options.max_connections = 0;
			} else if (this.params.maxConnections >= 100) {
				options.max_connections = 100;
			} else {
				options.max_connections = 40;
			}
		} else {
			options.max_connections = 40;
		}

		if (typeof this.params.dropPendingUpdates === "boolean") {
			options.drop_pending_updates = this.params.dropPendingUpdates;
		}

		if (
			this.params.secretToken &&
			typeof this.params.secretToken === "string"
		) {
			options.secret_token = this.params.secretToken;
		}

		return options;
	}
}
