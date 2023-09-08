import { Location } from "./location";

export interface Venue {
	location: Location;
	title: string;
	address: string;
	foursquareId?: string;
	foursquareType?: string;
	googlePlaceId?: string;
	googlePlaceType?: string;
}
