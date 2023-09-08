import EventEmitter from "events";
import { Update } from "./types/update";

export const Event = new EventEmitter();

Event.on("update", ({ update_id, ...updates }: Update) => {
	Object.entries(updates).forEach(([key, update]) => Event.emit(key, update));
});
