export interface PromoteChatMember {
	chat_id: string | number; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
	user_id: number; //	Unique identifier of the target user
	is_anonymous?: boolean; //	Pass True if the administrator's presence in the chat is hidden
	can_manage_chat?: boolean; //	Pass True if the administrator can access the chat event log, boost list in channels, see channel members, report spam messages, see anonymous administrators in supergroups and ignore slow mode. Implied by any other administrator privilege
	can_delete_messages?: boolean; //	Pass True if the administrator can delete messages of other users
	can_manage_video_chats?: boolean; //	Pass True if the administrator can manage video chats
	can_restrict_members?: boolean; //	Pass True if the administrator can restrict, ban or unban chat members, or access supergroup statistics
	can_promote_members?: boolean; //	Pass True if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by him)
	can_change_info?: boolean; //	Pass True if the administrator can change chat title, photo and other settings
	can_invite_users?: boolean; //	Pass True if the administrator can invite new users to the chat
	can_post_messages?: boolean; //	Pass True if the administrator can post messages in the channel, or access channel statistics; channels only
	can_edit_messages?: boolean; //	Pass True if the administrator can edit messages of other users and can pin messages; channels only
	can_pin_messages?: boolean; //	Pass True if the administrator can pin messages, supergroups only
	can_post_stories?: boolean; //	Pass True if the administrator can post stories in the channel; channels only
	can_edit_stories?: boolean; //	Pass True if the administrator can edit stories posted by other users; channels only
	can_delete_stories?: boolean; //	Pass True if the administrator can delete stories posted by other users; channels only
	can_manage_topics?: boolean; //	Pass True if the user is allowed to create, rename, close, and reopen forum topics, supergroups only
}
