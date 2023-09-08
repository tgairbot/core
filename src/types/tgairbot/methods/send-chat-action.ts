import { ChatAction } from "../../telegram";

export interface SendChatAtion {
	chatId: number | string;
	messageThreadId?: number;
	action: ChatAction;
}
