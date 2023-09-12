import { ChatPermissions } from "../chat";

export interface SetChatPermissions {
	chat_id: number | string;
	permissions: ChatPermissions;
	use_independent_chat_permissions?: boolean;
}
