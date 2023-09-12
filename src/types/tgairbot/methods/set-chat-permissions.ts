import { ChatPermissions } from "../chat";

export interface SetChatPermissions {
	chatId: number | string;
	permissions: ChatPermissions;
	useIndependentChatPermissions?: boolean;
}
