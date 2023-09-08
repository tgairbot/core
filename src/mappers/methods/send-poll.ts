import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";
import { MessageMapper } from "../message";
import { ReplyMarkupMapper } from "../reply-markup";

export class SendPollMapper {
	static toTelegram(options: TgAirBot.SendPoll): Telegram.SendPoll {
		const entity: Telegram.SendPoll = {
			chat_id: options.chatId,
			options: options.options,
			question: options.question,
			allow_sending_without_reply: options.allowSendingWithoutReply,
			allows_multiple_answers: options.allowsMultipleAnswers,
			close_date: options.closeDate,
			correct_option_id: options.correctOptionId,
			disable_notification: options.disableNotification,
			explanation: options.explanation,
			explanation_parse_mode: options.explanationParseMode,
			is_anonymous: options.isAnonymous,
			is_closed: options.isClosed,
			message_thread_id: options.messageThreadId,
			open_period: options.openPeriod,
			protect_content: options.protectContent,
			reply_to_message_id: options.replyToMessageId,
			explanation_entities: options.explanationEntities
				? options.explanationEntities.map(
						MessageMapper.messageEntityToTelegram,
				  )
				: undefined,
			reply_markup: options.replyMarkup
				? ReplyMarkupMapper.replyMarkupToTelegram(options.replyMarkup)
				: undefined,
		};

		const parse = RemoveUndefinedKeysFromObject<Telegram.SendPoll>(entity);

		return parse;
	}
}
