export interface CreateChatInviteLink {
	chatId: number | string;
	name?: string;
	expireDate?: number;
	memberLimit?: number;
	createsJoinRequest?: boolean;
}
