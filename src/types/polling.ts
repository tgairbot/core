import { UpdatedTypes } from "./telegram";
import { Handler } from "../handler";

export interface PollingOptions {
	limit?: number;
	timeout?: number;
	allowedUpdates?: Array<keyof UpdatedTypes>;
	interval?: number;
	log?: boolean;
	handler?: Handler;
}
