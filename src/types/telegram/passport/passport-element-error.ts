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
	field_name: string;
	data_hash: string;
	message: string;
}

export const PassportElementErrorDataFieldTypes: PassportElementErrorDataField["type"][] =
	[
		"passport",
		"internal_passport",
		"identity_card",
		"driver_license",
		"address",
		"personal_details",
	];

export interface PassportElementErrorFrontSide {
	source: string;
	type: "passport" | "driver_license" | "identity_card" | "internal_passport";
	file_hash: string;
	message: string;
}

export const PassportElementErrorFrontSideTypes: PassportElementErrorFrontSide["type"][] =
	["passport", "driver_license", "identity_card", "internal_passport"];

export interface PassportElementErrorReverseSide {
	source: string;
	type: "driver_license" | "identity_card";
	file_hash: string;
	message: string;
}

export const PassportElementErrorReverseSideTypes: PassportElementErrorReverseSide["type"][] =
	["driver_license", "identity_card"];

export interface PassportElementErrorSelfie {
	source: string;
	type: "passport" | "driver_license" | "identity_card" | "internal_passport";
	file_hash: string;
	message: string;
}

export const PassportElementErrorSelfieTypes: PassportElementErrorSelfie["type"][] =
	["passport", "driver_license", "identity_card", "internal_passport"];

export interface PassportElementErrorFile {
	source: string;
	type:
		| "utility_bill"
		| "bank_statement"
		| "rental_agreement"
		| "passport_registration"
		| "temporary_registration";
	file_hash: string;
	message: string;
}

export const PassportElementErrorFileTypes: PassportElementErrorFile["type"][] =
	[
		"utility_bill",
		"bank_statement",
		"rental_agreement",
		"passport_registration",
		"temporary_registration",
	];

export interface PassportElementErrorFiles {
	source: string;
	type:
		| "utility_bill"
		| "bank_statement"
		| "rental_agreement"
		| "passport_registration"
		| "temporary_registration";
	file_hashes: string[];
	message: string;
}

export const PassportElementErrorFilesTypes: PassportElementErrorFiles["type"][] =
	[
		"utility_bill",
		"bank_statement",
		"rental_agreement",
		"passport_registration",
		"temporary_registration",
	];

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
	file_hash: string;
	message: string;
}

export const PassportElementErrorTranslationFileTypes: PassportElementErrorTranslationFile["type"][] =
	[
		"passport",
		"driver_license",
		"identity_card",
		"internal_passport",
		"utility_bill",
		"bank_statement",
		"rental_agreement",
		"passport_registration",
		"temporary_registration",
	];

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
	file_hashes: string[];
	message: string;
}

export const PassportElementErrorTranslationFilesTypes: PassportElementErrorTranslationFiles["type"][] =
	[
		"passport",
		"driver_license",
		"identity_card",
		"internal_passport",
		"utility_bill",
		"bank_statement",
		"rental_agreement",
		"passport_registration",
		"temporary_registration",
	];

export interface PassportElementErrorUnspecified {
	source: string;
	type: string;
	element_hash: string;
	message: string;
}
