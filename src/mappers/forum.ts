import * as Telegram from "../types/telegram";
import * as TgAirBot from "../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../utils/remove-undefined-keys-from-object";

export class ForumMapper {
	static forumTopicToTAB(
		forumTopic: Telegram.ForumTopic,
	): TgAirBot.ForumTopic {
		const entity: TgAirBot.ForumTopic = {
			name: forumTopic.name,
			iconColor: forumTopic.icon_color,
			messageThreadId: forumTopic.message_thread_id,
			iconCustomEmojiId: forumTopic.icon_custom_emoji_id,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.ForumTopic>(entity);
	}

	static forumTopicClosedToTAB(
		forumTopicClosed: Telegram.ForumTopicClosed,
	): TgAirBot.ForumTopicClosed {
		const entity: TgAirBot.ForumTopicClosed = {};

		return RemoveUndefinedKeysFromObject<TgAirBot.ForumTopicClosed>(entity);
	}

	static forumTopicEditedToTAB(
		forumTopicEdited: Telegram.ForumTopicEdited,
	): TgAirBot.ForumTopicEdited {
		const entity: TgAirBot.ForumTopicEdited = {
			iconCustomEmojiId: forumTopicEdited.icon_custom_emoji_id,
			name: forumTopicEdited.name,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.ForumTopicEdited>(entity);
	}

	static forumTopicCreatedToTAB(
		forumTopicCreated: Telegram.ForumTopicCreated,
	): TgAirBot.ForumTopicCreated {
		const entity: TgAirBot.ForumTopicCreated = {
			iconCustomEmojiId: forumTopicCreated.icon_custom_emoji_id,
			name: forumTopicCreated.name,
			iconColor: forumTopicCreated.icon_color,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.ForumTopicCreated>(
			entity,
		);
	}

	static forumTopicReopenedToTAB(
		forumTopicReopened: Telegram.ForumTopicReopened,
	): TgAirBot.ForumTopicReopened {
		const entity: TgAirBot.ForumTopicReopened = {};

		return RemoveUndefinedKeysFromObject<TgAirBot.ForumTopicReopened>(
			entity,
		);
	}

	static generalForumTopicHiddenToTAB(
		generalForumTopicHidden: Telegram.GeneralForumTopicHidden,
	): TgAirBot.ForumTopicReopened {
		const entity: TgAirBot.GeneralForumTopicHidden = {};

		return RemoveUndefinedKeysFromObject<TgAirBot.ForumTopicReopened>(
			entity,
		);
	}

	static generalForumTopicUnhiddenToTAB(
		generalForumTopicUnhidden: Telegram.GeneralForumTopicUnhidden,
	): TgAirBot.ForumTopicReopened {
		const entity: TgAirBot.GeneralForumTopicUnhidden = {};

		return RemoveUndefinedKeysFromObject<TgAirBot.ForumTopicReopened>(
			entity,
		);
	}
}
