export interface SetGameScore {
	user_id: number;
	score: number;
	force?: boolean;
	disable_edit_message?: boolean;
	chat_id?: number;
	message_id?: number;
	inline_message_id?: string;
}
