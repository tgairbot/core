export interface Location {
	longitude: number;
	latitude: number;
	horizontalAccuracy?: number;
	livePeriod?: number;
	heading?: number;
	proximityAlertRadius?: number;
}
