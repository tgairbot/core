import * as Telegram from "../types/telegram";
import * as TgAirBot from "../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../utils/remove-undefined-keys-from-object";

export class PassportMapper {
	static toTAB(pasportData: Telegram.PassportData): TgAirBot.PassportData {
		const entity: TgAirBot.PassportData = {
			data: pasportData.data.map(
				PassportMapper.encryptedPassportElementToTAB,
			),
			credentials: PassportMapper.encriptedCredentialsToTAB(
				pasportData.credentials,
			),
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.PassportData>(entity);
	}

	static encriptedCredentialsToTAB(
		credentials: Telegram.EncryptedCredentials,
	): TgAirBot.EncryptedCredentials {
		const entity: TgAirBot.EncryptedCredentials = {
			data: credentials.data,
			hash: credentials.hash,
			secret: credentials.secret,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.EncryptedCredentials>(
			entity,
		);
	}

	static pasportFileToTAB(
		file: Telegram.PassportFile,
	): TgAirBot.PassportFile {
		const entity: TgAirBot.PassportFile = {
			fileUniqueId: file.file_unique_id,
			fileId: file.file_id,
			fileDate: file.file_date,
			fileSize: file.file_size,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.PassportFile>(entity);
	}

	static encryptedPassportElementToTAB(
		element: Telegram.EncryptedPassportElement,
	): TgAirBot.EncryptedPassportElement {
		const entity: TgAirBot.EncryptedPassportElement = {
			type: element.type,
			email: element.email,
			phoneNumber: element.phone_number,
			hash: element.hash,
			data: element.data,
			files: element.files
				? element.files.map(PassportMapper.pasportFileToTAB)
				: undefined,
			selfie: element.selfie
				? PassportMapper.pasportFileToTAB(element.selfie)
				: undefined,
			frontSide: element.front_side
				? PassportMapper.pasportFileToTAB(element.front_side)
				: undefined,
			reverseSide: element.reverse_side
				? PassportMapper.pasportFileToTAB(element.reverse_side)
				: undefined,
			translation: element.translation
				? element.translation.map(PassportMapper.pasportFileToTAB)
				: undefined,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.EncryptedPassportElement>(
			entity,
		);
	}
}
