export interface UnbanChatMember {
	chat_id: number | string;
	user_id: number;
	only_if_banned?: boolean;
}
