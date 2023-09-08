export interface PassportData {
	data: EncryptedPassportElement[];
	credentials: EncryptedCredentials;
}

export type EncriptedPasportElementType =
	| "pasport_datails"
	| "pasport"
	| "driver_license"
	| "identity_card"
	| "internal_passport"
	| "address"
	| "utility_bill"
	| "bank_statement"
	| "rental_agreement"
	| "passport_registration"
	| "temporary_registration"
	| "phone_number"
	| "email";

export interface EncryptedPassportElement {
	type: EncriptedPasportElementType;
	data?: string;
	phone_number?: string;
	email?: string;
	files?: PassportFile[];
	front_side?: PassportFile;
	reverse_side?: PassportFile;
	selfie?: PassportFile;
	translation?: PassportFile[];
	hash: string;
}

export interface EncryptedCredentials {
	data: string;
	hash: string;
	secret: string;
}

export interface PassportFile {
	file_id: string;
	file_unique_id: string;
	file_size: number;
	file_date: number;
}
