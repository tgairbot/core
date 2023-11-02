import { LabeledPrice } from "./labeled-price";

export interface ShippingOption {
	id: string;
	title: string;
	prices: LabeledPrice[];
}
