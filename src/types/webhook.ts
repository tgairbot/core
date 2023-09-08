import { UpdatedTypes } from "./update";

export interface WebhookOptions {
	domain: string;
	log?: boolean;
	port?: number;
	ipAddress?: string;
	maxConnections?: number;
	allowedUpdates?: Array<keyof UpdatedTypes>;
	dropPendingUpdates?: boolean;
	secretToken?: string;
}

export interface SetWebhook {
	url: string;
	ip_address?: string;
	max_connections?: number;
	allowed_updates?: Array<keyof UpdatedTypes>;
	drop_pending_updates?: boolean;
	secret_token?: string;
}
