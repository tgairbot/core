import { PollType } from "../telegram/poll";
import { MessageEntity } from "./message";
import { User } from "./user";

export interface Poll {
	id: string;
	question: string;
	options: PollOption[];
	totalVoterCount: number;
	isClosed: boolean;
	isAnonymous: boolean;
	type: PollType;
	allowsMultipleAnswers: boolean;
	correctOptionId?: number;
	explanation?: string;
	explanationEntities?: MessageEntity[];
	openPeriod?: number;
	closeDate?: number;
}

export interface PollOption {
	text: string;
	voterCount: number;
}

export interface PollAnswer {
	pollId: string;
	user: User;
	optionsIds: number[];
}
