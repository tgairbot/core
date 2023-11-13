import * as Telegram from "../types/telegram";
import { UpdateMapper } from "../mappers/update";
import * as TgAirBot from "../types/tgairbot";
import { UpdateHandler } from "../handler";

export class BaseUpdate {
	protected handleUpdate(update: TgAirBot.Update<any>) {
		const { updateId, ...events } = update;

		const eventGenerator = this.eventsGenerator(update);

		for (const { key, update } of eventGenerator) {
			UpdateHandler.emit("update", key, update);
			UpdateHandler.emit(key, update);
		}

		return update;
	}

	protected *mapGenerator(updates: Telegram.Update[]) {
		for (const update of updates) yield UpdateMapper.toTAB(update);
	}

	protected *eventsGenerator(update: TgAirBot.Update<any>) {
		const { updateId, ...updates } = update;

		const keys = Object.keys(updates);

		for (const key of keys) yield { key, update };
	}
}
