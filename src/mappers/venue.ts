import * as Telegram from "../types/telegram";
import * as TgAirBot from "../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../utils/remove-undefined-keys-from-object";
import { LocationMapper } from "./location";

export class VenueMapper {
	static toTAB(venue: Telegram.Venue): TgAirBot.Venue {
		const entity: TgAirBot.Venue = {
			title: venue.title,
			location: LocationMapper.toTAB(venue.location),
			address: venue.address,
			foursquareId: venue.foursquare_id,
			googlePlaceId: venue.google_place_id,
			googlePlaceType: venue.google_place_type,
			foursquareType: venue.foursquare_type,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.Venue>(entity);
	}
}
