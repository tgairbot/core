import { Message } from "./message";
import { User } from "./user";

export interface CallbackQuery {
	id: string;
	from: User;
	message?: Message;
	inline_message_id?: string;
	chat_instance: string;
	data: string;
	game_short_name?: string;
}
