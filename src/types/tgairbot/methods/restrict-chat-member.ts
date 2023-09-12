import { ChatPermissions } from "../chat";

export interface RestrictChatMember {
	chatId: number | string;
	userId: number;
	permissions: ChatPermissions;
	useIndependentChatPermissions?: boolean;
	untilDate?: number;
}
