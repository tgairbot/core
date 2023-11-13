import { debug } from "console";

import { Client } from "../api/client";
import { PollingOptions } from "../types/polling";
import * as Telegram from "../types/telegram";
import { WrapRequest } from "../types/wrap-request";
import { BaseUpdate } from "./base-update";

export class Polling extends BaseUpdate {
	private client: Client;
	private lastUpdateId?: number;
	private first = true;

	constructor(
		private readonly token: string,
		private options: PollingOptions = {
			interval: 300,
		},
	) {
		super();

		this._filterOptions();
		this.client = new Client("getUpdates", this.token);
	}

	async start() {
		if (this.first) {
			await new Client("deleteWebhook", this.token).send();

			console.log("Start pooling.");
			this.first = false;
		}

		const options: Telegram.GetUpdates = this.lastUpdateId
			? { offset: this.lastUpdateId + 1 }
			: {};

		const updates = await this._getUpdates({
			...options,
			timeout: this.options.timeout,
			allowed_updates: this.options.allowedUpdates,
			limit: this.options.limit,
		});
		if (this.options.log) debug("Get Updates: ", updates.length);

		const mapUpdatesGenerator = this.mapGenerator(updates);

		for (const update of mapUpdatesGenerator) {
			if (this.options.log) {
				debug(JSON.stringify(update, null, 2));
			}

			const { updateId } = this.handleUpdate(update);

			this.lastUpdateId = updateId;
		}

		setTimeout(() => this.start(), this.options.interval);

		return this;
	}

	private async _getUpdates(
		params?: Telegram.GetUpdates,
	): Promise<Telegram.Update[]> {
		const { body } =
			await this.client.send<WrapRequest<Telegram.Update[]>>(params);

		if (body.ok && body.result) {
			return body.result;
		} else {
			return [];
		}
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
				updateType => Telegram.AvailableUpdates.includes(updateType),
			);
		}
	}
}
