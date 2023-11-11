export interface PromoteChatMember {
	chatId: string | number; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
	userId: number; //	Unique identifier of the target user
	isAnonymous?: boolean; //	Pass True if the administrator's presence in the chat is hidden
	canManageChat?: boolean; //	Pass True if the administrator can access the chat event log, boost list in channels, see channel members, report spam messages, see anonymous administrators in supergroups and ignore slow mode. Implied by any other administrator privilege
	canDeleteMessages?: boolean; //	Pass True if the administrator can delete messages of other users
	canManageVideoChats?: boolean; //	Pass True if the administrator can manage video chats
	canRestrictMembers?: boolean; //	Pass True if the administrator can restrict, ban or unban chat members, or access supergroup statistics
	canPromoteMembers?: boolean; //	Pass True if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by him)
	canChangeInfo?: boolean; //	Pass True if the administrator can change chat title, photo and other settings
	canInviteUsers?: boolean; //	Pass True if the administrator can invite new users to the chat
	canPostMessages?: boolean; //	Pass True if the administrator can post messages in the channel, or access channel statistics; channels only
	canEditMessages?: boolean; //	Pass True if the administrator can edit messages of other users and can pin messages; channels only
	canPinMessages?: boolean; //	Pass True if the administrator can pin messages, supergroups only
	canPostStories?: boolean; //	Pass True if the administrator can post stories in the channel; channels only
	canEditStories?: boolean; //	Pass True if the administrator can edit stories posted by other users; channels only
	canDeleteStories?: boolean; //	Pass True if the administrator can delete stories posted by other users; channels only
	canManageTopics?: boolean; //	Pass True if the user is allowed to create, rename, close, and reopen forum topics, supergroups only
}
