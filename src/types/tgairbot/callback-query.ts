import { Message } from "./message";
import { User } from "./user";

export interface CallbackQuery {
	id: string;
	from: User;
	message?: Message;
	inlineMessageId?: string;
	chatInstance: string;
	data: string;
	gameShortName?: string;
}
