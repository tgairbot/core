import { debug } from "console";

import { Client } from "../api/client";
import { Handler } from "../handler";
import { PollingOptions } from "../types/polling";
import { AlovedUpdates, GetUpdates, Update } from "../types/telegram/update";
import { WrapRequest } from "../types/wrap-request";

export class Polling {
	private client: Client;
	private lastUpdateId?: number;
	private first = true;

	constructor(
		private readonly token: string,
		private options: PollingOptions = { interval: 300 },
	) {
		this._filterOptions();
		this.client = new Client("getUpdates", this.token);
	}

	async start() {
		if (this.first) {
			await new Client("deleteWebhook", this.token).send();

			console.log("Start pooling.");
			this.first = false;
		}

		const options: GetUpdates = this.lastUpdateId
			? { offset: this.lastUpdateId + 1 }
			: {};

		const updates = await this._getUpdates({
			...options,
			timeout: this.options.timeout,
			allowed_updates: this.options.allowedUpdates,
			limit: this.options.limit,
		});
		if (this.options.log) debug("Get Updates: ", updates.length);

		updates.forEach(update => this._handleUpdate(update));

		setTimeout(() => this.start(), this.options.interval);

		return this;
	}

	private async _getUpdates(params?: GetUpdates): Promise<Update[]> {
		const { body } = await this.client.send<WrapRequest<Update[]>>(params);

		if (body.ok && body.result) {
			return body.result;
		} else {
			return [];
		}
	}

	private _handleUpdate(update: Update) {
		this.lastUpdateId = update.update_id;
		if (this.options.log)
			debug("Handle update: ", JSON.stringify(update, null, 2));

		Handler.emit("update", update);
	}

	private _filterOptions() {
		if (
			!(
				this.options.interval &&
				typeof this.options.interval === "number" &&
				this.options.interval >= 300
			)
		) {
			this.options.interval === 300;
		}

		if (this.options.limit && typeof this.options.limit === "number") {
			if (this.options.limit < 0) this.options.limit = 0;
			if (this.options.limit > 100) this.options.limit = 100;
		} else {
			this.options.limit = undefined;
		}

		if (
			!(
				this.options.timeout &&
				typeof this.options.timeout === "number" &&
				this.options.timeout >= 0
			)
		) {
			this.options.timeout = 0;
		}

		if (
			this.options.allowedUpdates &&
			Array.isArray(this.options.allowedUpdates)
		) {
			this.options.allowedUpdates = this.options.allowedUpdates.filter(
				updateType => AlovedUpdates.includes(updateType),
			);
		}
	}
}
