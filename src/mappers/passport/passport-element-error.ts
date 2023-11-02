import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import * as TgAirBot from "../../types/tgairbot";
import * as Telegram from "../../types/telegram";

export class PassportElementErrorMapper {
	static toTelegram(
		options: TgAirBot.PassportElementError,
	): Telegram.PassportElementError {
		const entity: Record<string, any> = {
			type: options.type,
			message: options.message,
			source: options.source,
		};

		if ("elementHash" in options) {
			entity.element_hash = options.elementHash;
		}

		if ("fileHash" in options) {
			entity.file_hash = options.fileHash;
		}

		if ("fieldName" in options) {
			entity.field_name = options.fieldName;
		}

		if ("dataHash" in options) {
			entity.data_hash = options.dataHash;
		}

		if ("fileHashes" in options) {
			entity.file_hashes = options.fileHashes;
		}

		return RemoveUndefinedKeysFromObject<Telegram.PassportElementError>(
			entity as Telegram.PassportElementError,
		);
	}
}
