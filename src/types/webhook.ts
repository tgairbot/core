import { UpdatedTypes } from "./telegram";
import { Handler } from "../handler";

export interface WebhookOptions {
	domain: string;
	log?: boolean;
	port?: number;
	ipAddress?: string;
	maxConnections?: number;
	allowedUpdates?: Array<keyof UpdatedTypes>;
	dropPendingUpdates?: boolean;
	secretToken?: string;
	handler?: Handler;
}

export interface SetWebhook {
	url: string;
	ip_address?: string;
	max_connections?: number;
	allowed_updates?: Array<keyof UpdatedTypes>;
	drop_pending_updates?: boolean;
	secret_token?: string;
}
