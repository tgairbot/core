export interface ForumTopic {
	message_thread_id: number;
	name: string;
	icon_color: string;
	icon_custom_emoji_id?: string;
}

export interface ForumTopicCreated {
	name: string;
	icon_color: number;
	icon_custom_emoji_id?: string;
}

export interface ForumTopicClosed {}

export interface ForumTopicEdited {
	name?: string;
	icon_custom_emoji_id?: string;
}

export interface ForumTopicReopened {}

export interface GeneralForumTopicHidden {}

export interface GeneralForumTopicUnhidden {}
