import * as Telegram from "../types/telegram";
import * as TgAirBot from "../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../utils/remove-undefined-keys-from-object";

export class DiceMapper {
	static toTAB(dice: Telegram.Dice): TgAirBot.Dice {
		const entity: TgAirBot.Dice = {
			emoji: dice.emoji,
			value: dice.value,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.Dice>(entity);
	}
}
