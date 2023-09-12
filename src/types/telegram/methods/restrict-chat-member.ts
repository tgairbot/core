import { ChatPermissions } from "../chat";

export interface RestrictChatMember {
	chat_id: number | string;
	user_id: number;
	permissions: ChatPermissions;
	use_independent_chat_permissions?: boolean;
	until_date?: number;
}
