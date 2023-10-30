import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { ChatMapper } from "../chat";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class SetMyDefaultAdministratorRightsMapper {
	static toTelegram(
		options: TgAirBot.SetMyDefaultAdministratorRights,
	): Telegram.SetMyDefaultAdministratorRights {
		const entity: Telegram.SetMyDefaultAdministratorRights = {
			rights: options.rights
				? ChatMapper.chatAdministratorRightsToTelegram(options.rights)
				: undefined,
			for_channels: options.forChannels,
		};

		return RemoveUndefinedKeysFromObject<Telegram.SetMyDefaultAdministratorRights>(
			entity,
		);
	}
}
