import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class GetUserProfilePhotosMapper {
	static toTelegram(
		options: TgAirBot.GetUserProfilePhotos,
	): Telegram.GetUserProfilePhotos {
		const entity: Telegram.GetUserProfilePhotos = {
			user_id: options.userId,
			limit: options.limit,
			offset: options.offset,
		};

		return RemoveUndefinedKeysFromObject<Telegram.GetUserProfilePhotos>(
			entity,
		);
	}
}
