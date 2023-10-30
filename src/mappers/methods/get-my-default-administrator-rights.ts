import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class GetMyDefaultAdministratorRightsMapper {
	static toTelegram(
		options: TgAirBot.GetMyDefaultAdministratorRights,
	): Telegram.GetMyDefaultAdministratorRights {
		const entity: Telegram.GetMyDefaultAdministratorRights = {
			for_channels: options.forChannels,
		};

		return RemoveUndefinedKeysFromObject<Telegram.GetMyDefaultAdministratorRights>(
			entity,
		);
	}
}
