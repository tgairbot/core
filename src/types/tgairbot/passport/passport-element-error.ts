export type PassportElementError =
	| PassportElementErrorDataField
	| PassportElementErrorFrontSide
	| PassportElementErrorReverseSide
	| PassportElementErrorSelfie
	| PassportElementErrorFile
	| PassportElementErrorFiles
	| PassportElementErrorTranslationFile
	| PassportElementErrorTranslationFiles
	| PassportElementErrorUnspecified;

export interface PassportElementErrorDataField {
	source: string;
	type:
		| "personal_details"
		| "passport"
		| "driver_license"
		| "identity_card"
		| "internal_passport"
		| "address";
	fieldName: string;
	dataHash: string;
	message: string;
}

export interface PassportElementErrorFrontSide {
	source: string;
	type: "passport" | "driver_license" | "identity_card" | "internal_passport";
	fileHash: string;
	message: string;
}

export interface PassportElementErrorReverseSide {
	source: string;
	type: "driver_license" | "identity_card";
	fileHash: string;
	message: string;
}

export interface PassportElementErrorSelfie {
	source: string;
	type: "passport" | "driver_license" | "identity_card" | "internal_passport";
	fileHash: string;
	message: string;
}

export interface PassportElementErrorFile {
	source: string;
	type:
		| "utility_bill"
		| "bank_statement"
		| "rental_agreement"
		| "passport_registration"
		| "temporary_registration";
	fileHash: string;
	message: string;
}

export interface PassportElementErrorFiles {
	source: string;
	type:
		| "utility_bill"
		| "bank_statement"
		| "rental_agreement"
		| "passport_registration"
		| "temporary_registration";
	fileHashes: string[];
	message: string;
}

export interface PassportElementErrorTranslationFile {
	source: string;
	type:
		| "passport"
		| "driver_license"
		| "identity_card"
		| "internal_passport"
		| "utility_bill"
		| "bank_statement"
		| "rental_agreement"
		| "passport_registration"
		| "temporary_registration";
	fileHash: string;
	message: string;
}

export interface PassportElementErrorTranslationFiles {
	source: string;
	type:
		| "passport"
		| "driver_license"
		| "identity_card"
		| "internal_passport"
		| "utility_bill"
		| "bank_statement"
		| "rental_agreement"
		| "passport_registration"
		| "temporary_registration";
	fileHashes: string[];
	message: string;
}

export interface PassportElementErrorUnspecified {
	source: string;
	type: string;
	elementHash: string;
	message: string;
}
