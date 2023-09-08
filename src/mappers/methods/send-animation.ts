import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import { MessageMapper } from "../message";
import { ReplyMarkupMapper } from "../reply-markup";

export class SendAnimationMapper {
	static toTelegram(options: TgAirBot.SendAnimation): Telegram.SendAnimation {
		const entity: Telegram.SendAnimation = {
			reply_markup: options.replyMarkup
				? ReplyMarkupMapper.replyMarkupToTelegram(options.replyMarkup)
				: undefined,
			caption: options.caption,
			chat_id: options.chatId,
			message_thread_id: options.messageThreadId,
			parse_mode: options.parseMode,
			protect_content: options.protectContent,
			reply_to_message_id: options.replyToMessageId,
			disable_notification: options.disableNotification,
			allow_sending_without_reply: options.allowSendingWithoutReply,
			caption_entities: options.captionEntities
				? options.captionEntities.map(
						MessageMapper.messageEntityToTelegram,
				  )
				: undefined,
			has_spoiler: options.hasSpoiler,
			thumbnail: options.thumbnail,
			duration: options.duration,
			animation: options.animation,
			width: options.width,
			height: options.height,
		};

		const parse =
			RemoveUndefinedKeysFromObject<Telegram.SendAnimation>(entity);

		if (typeof options.animation !== "string") {
			parse.animation = options.animation;
		}

		if (options.thumbnail && typeof options.thumbnail !== "string") {
			parse.thumbnail = options.thumbnail;
		}

		return parse;
	}
}
