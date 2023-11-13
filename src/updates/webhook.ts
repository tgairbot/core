import { debug } from "console";

import { Client } from "../api/client";
import { HandleFn, Server } from "../api/server";
import { Response } from "../types/server";
import { Update } from "../types/telegram";
import { SetWebhook, WebhookOptions } from "../types/webhook";
import { WrapRequest } from "../types/wrap-request";
import { BaseUpdate } from "./base-update";

export class Webhook extends BaseUpdate {
	private client: Client;
	private server: Server;
	private readonly params: SetWebhook;

	constructor(
		private readonly token: string,
		private options: WebhookOptions,
	) {
		super();

		this.client = new Client("setWebhook", this.token);
		this.params = this._parseOptions();
		this.server = new Server("localhost", this.options.port || 443);
	}

	async start() {
		const { body } = await this.client.send<
			WrapRequest<boolean>,
			SetWebhook
		>(this.params);

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
		const mapUpdatesGenerator = this.mapGenerator([body]);

		for (const update of mapUpdatesGenerator) {
			if (this.options.log) {
				debug("Handle update: ", JSON.stringify(update, null, 2));
			}

			this.handleUpdate(update);
		}
	}

	private _parseOptions() {
		const options: SetWebhook = {
			url: this.options.domain,
			ip_address: this.options.ipAddress,
		};

		if (
			this.options.maxConnections &&
			typeof this.options.maxConnections === "number"
		) {
			if (this.options.maxConnections <= 0) {
				options.max_connections = 0;
			} else if (this.options.maxConnections >= 100) {
				options.max_connections = 100;
			} else {
				options.max_connections = 40;
			}
		} else {
			options.max_connections = 40;
		}

		if (typeof this.options.dropPendingUpdates === "boolean") {
			options.drop_pending_updates = this.options.dropPendingUpdates;
		}

		if (
			this.options.secretToken &&
			typeof this.options.secretToken === "string"
		) {
			options.secret_token = this.options.secretToken;
		}

		return options;
	}
}
