import { PollType } from "../telegram/poll";
import { MessageEntity } from "./message";
import { User } from "./user";
import { Chat } from "./chat";

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
	voterChat?: Chat;
	user: User;
	optionsIds: number[];
}
