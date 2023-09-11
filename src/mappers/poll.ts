import * as Telegram from "../types/telegram";
import * as TgAirBot from "../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../utils/remove-undefined-keys-from-object";
import { MessageMapper } from "./message";
import { UserMapper } from "./user";

export class PollMapper {
	static toTAB(poll: Telegram.Poll): TgAirBot.Poll {
		const entity: TgAirBot.Poll = {
			type: poll.type,
			id: poll.id,
			isClosed: poll.is_closed,
			question: poll.question,
			closeDate: poll.close_date,
			isAnonymous: poll.is_anonymous,
			openPeriod: poll.open_period,
			explanation: poll.explanation,
			totalVoterCount: poll.total_voter_count,
			correctOptionId: poll.correct_option_id,
			explanationEntities: poll.explanation_entities
				? poll.explanation_entities.map(
						MessageMapper.messageEntityToTAB,
				  )
				: undefined,
			allowsMultipleAnswers: poll.allows_multiple_answers,
			options: poll.options.map(PollMapper.pollOptionToTAB),
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.Poll>(entity);
	}

	static pollOptionToTAB(
		pollOption: Telegram.PollOption,
	): TgAirBot.PollOption {
		const entity: TgAirBot.PollOption = {
			text: pollOption.text,
			voterCount: pollOption.voter_count,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.PollOption>(entity);
	}

	static pollAnswerToTAB(
		pollAnswer: Telegram.PollAnswer,
	): TgAirBot.PollAnswer {
		const entity: TgAirBot.PollAnswer = {
			optionsIds: pollAnswer.options_ids,
			pollId: pollAnswer.poll_id,
			user: UserMapper.toTAB(pollAnswer.user),
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.PollAnswer>(entity);
	}
}
