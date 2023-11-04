import { UpdatedTypes } from "./telegram";

export interface PollingOptions {
	limit?: number;
	timeout?: number;
	allowedUpdates?: Array<keyof UpdatedTypes>;
	interval?: number;
	log?: boolean;
}
