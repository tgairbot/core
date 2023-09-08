import { EncriptedPasportElementType } from "../telegram/pasport";

export interface PassportData {
	data: EncryptedPassportElement[];
	credentials: EncryptedCredentials;
}

export interface EncryptedPassportElement {
	type: EncriptedPasportElementType;
	data?: string;
	phoneNumber?: string;
	email?: string;
	files?: PassportFile[];
	frontSide?: PassportFile;
	reverseSide?: PassportFile;
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
	fileId: string;
	fileUniqueId: string;
	fileSize: number;
	fileDate: number;
}
