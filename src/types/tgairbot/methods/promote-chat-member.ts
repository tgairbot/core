export interface PromoteChatMember {
	chatId: number | string;
	userId: number;
	isAnonymous?: boolean;
	canManageChat?: boolean;
	canPostMessages?: boolean;
	canEditMessages?: boolean;
	canDeleteMessages?: boolean;
	canManageVideoChats?: boolean;
	canRestrictMembers?: boolean;
	canPromoteMembers?: boolean;
	canChangeInfo?: boolean;
	canInviteUsers?: boolean;
	canPinMessages?: boolean;
	canManageTopics?: boolean;
}
