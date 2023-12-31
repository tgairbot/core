import * as Telegram from "../types/telegram";
import * as TgAirBot from "../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../utils/remove-undefined-keys-from-object";

export class MaskPositionMapper {
	static toTAB(maskPosition: Telegram.MaskPosition): TgAirBot.MaskPosition {
		const entity: TgAirBot.MaskPosition = {
			scale: maskPosition.scale,
			point: maskPosition.point,
			xShift: maskPosition.x_shift,
			yShift: maskPosition.y_shift,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.MaskPosition>(entity);
	}

	static toTelegram(options: TgAirBot.MaskPosition): Telegram.MaskPosition {
		const entity: Telegram.MaskPosition = {
			scale: options.scale,
			point: options.point,
			x_shift: options.xShift,
			y_shift: options.yShift,
		};

		return RemoveUndefinedKeysFromObject<Telegram.MaskPosition>(entity);
	}
}
