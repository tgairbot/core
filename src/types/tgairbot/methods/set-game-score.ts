export interface SetGameScore {
	userId: number;
	score: number;
	force?: boolean;
	disableEditMessage?: boolean;
	chatId?: number;
	messageId?: number;
	inlineMessageId?: string;
}
