export interface BanChatMember {
	chat_id?: number | string;
	user_id: number;
	until_date?: number;
	revoke_messages?: boolean;
}
