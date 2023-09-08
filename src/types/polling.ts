import { UpdatedTypes } from "./update";

export interface PollingOptions {
	limit?: number;
	timeout?: number;
	allowedUpdates?: Array<keyof UpdatedTypes>;
	interval?: number;
	log?: boolean;
}
