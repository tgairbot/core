import { UpdatedTypes } from "./telegram/update";

export interface PollingOptions {
	limit?: number;
	timeout?: number;
	allowedUpdates?: Array<keyof UpdatedTypes>;
	interval?: number;
	log?: boolean;
}
