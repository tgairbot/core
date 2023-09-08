import * as Telegram from "../types/telegram";
import * as TgAirBot from "../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../utils/remove-undefined-keys-from-object";

export class LocationMapper {
	static toTAB(location: Telegram.Location): TgAirBot.Location {
		const entity: TgAirBot.Location = {
			latitude: location.latitude,
			longitude: location.longitude,
			heading: location.heading,
			livePeriod: location.live_period,
			horizontalAccuracy: location.horizontal_accuracy,
			proximityAlertRadius: location.horizontal_accuracy,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.Location>(entity);
	}
}
