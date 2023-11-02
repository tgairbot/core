import { PassportElementError } from "../passport/passport-element-error";

export interface SetPassportDataErrors {
	userId: number;
	errors: PassportElementError[];
}
