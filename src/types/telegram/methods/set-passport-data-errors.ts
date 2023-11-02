import { PassportElementError } from "../passport/passport-element-error";

export interface SetPassportDataErrors {
	user_id: number;
	errors: PassportElementError[];
}
