export interface BanChatMember {
	chatId?: number | string;
	userId: number;
	untilDate?: number;
	revokeMessages?: boolean;
}
