export interface ForumTopic {
	messageThreadId: number;
	name: string;
	iconColor: string;
	iconCustomEmojiId?: string;
}

export interface ForumTopicCreated {
	name: string;
	iconColor: number;
	iconCustomEmojiId?: string;
}

export interface ForumTopicClosed {}

export interface ForumTopicEdited {
	name?: string;
	iconCustomEmojiId?: string;
}

export interface ForumTopicReopened {}

export interface GeneralForumTopicHidden {}

export interface GeneralForumTopicUnhidden {}
