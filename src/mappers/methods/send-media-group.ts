import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import { InputMapper } from "../input";

export class SendMediaGroupMapper {
	static toTelegram(
		options: TgAirBot.SendMediaGroup,
	): Telegram.SendMediaGroup {
		const entity: Telegram.SendMediaGroup = {
			chat_id: options.chatId,
			message_thread_id: options.messageThreadId,
			protect_content: options.protectContent,
			reply_to_message_id: options.replyToMessageId,
			disable_notification: options.disableNotification,
			allow_sending_without_reply: options.allowSendingWithoutReply,
			media: options.media.map(InputMapper.toTelegram),
		};

		return RemoveUndefinedKeysFromObject<Telegram.SendMediaGroup>(entity);
	}
}
