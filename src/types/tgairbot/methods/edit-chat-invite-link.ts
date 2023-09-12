export interface EditChatInviteLink {
	chatId: number | string;
	inviteLink: string;
	name?: string;
	expireDate?: number;
	memberLimit?: number;
	createsJoinRequest?: boolean;
}
