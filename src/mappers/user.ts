import * as Telegram from "../types/telegram";
import * as TgAirBot from "../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../utils/remove-undefined-keys-from-object";
import { PhotoMapper } from "./photo";

export class UserMapper {
	static toTAB(user: Telegram.User): TgAirBot.User {
		const entity: TgAirBot.User = {
			id: user.id,
			isBot: user.is_bot,
			firstName: user.first_name,
			lastName: user.last_name,
			username: user.username,
			isPremium: user.is_premium,
			languageCode: user.language_code,
			canJoinGroups: user.can_join_groups,
			addedToAttachmentMenu: user.added_to_attachment_menu,
			supportsInlineQueries: user.supports_inline_queries,
			canReadAllGroupMessages: user.can_read_all_group_messages,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.User>(entity);
	}

	static toTelegram(user: TgAirBot.User): Telegram.User {
		const entity: Telegram.User = {
			id: user.id,
			is_bot: user.isBot,
			is_premium: user.isPremium,
			last_name: user.lastName,
			first_name: user.firstName,
			username: user.username,
			language_code: user.languageCode,
			can_read_all_group_messages: user.canReadAllGroupMessages,
			supports_inline_queries: user.supportsInlineQueries,
			added_to_attachment_menu: user.addedToAttachmentMenu,
			can_join_groups: user.canJoinGroups,
		};

		return RemoveUndefinedKeysFromObject<Telegram.User>(entity);
	}

	static userSharedToTAB(
		userShared: Telegram.UserShared,
	): TgAirBot.UserShared {
		const entity: TgAirBot.UserShared = {
			userId: userShared.user_id,
			requestId: userShared.request_id,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.UserShared>(entity);
	}

	static userProfilePhotosToTAB(
		userProfilePhotos: Telegram.UserProfilePhotos,
	): TgAirBot.UserProfilePhotos {
		const entity: TgAirBot.UserProfilePhotos = {
			photos: userProfilePhotos.photos.map(arrayPhotos =>
				arrayPhotos.map(PhotoMapper.toTAB),
			),
			totalCount: userProfilePhotos.total_count,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.UserProfilePhotos>(
			entity,
		);
	}
}
