import { PollingOptions } from "./polling";
import { WebhookOptions } from "./webhook";

export interface BotOptions {
	polling?: boolean | PollingOptions;
	webhook?: WebhookOptions;
}
