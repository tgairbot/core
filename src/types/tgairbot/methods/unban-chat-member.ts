export interface UnbanChatMember {
	chatId: number | string;
	userId: number;
	onlyIfBanned?: boolean;
}
