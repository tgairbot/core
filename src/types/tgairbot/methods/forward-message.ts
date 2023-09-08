export interface ForwardMessage {
	chatId: number | string;
	messageThreadId?: number;
	fromChatId: number | string;
	disableNotification?: boolean;
	protectContent?: boolean;
	messageId: number;
}
