import { PhotoSize } from "./photo";

export interface User {
	id: number;
	isBot: boolean;
	firstName: string;
	lastName?: string;
	username?: string;
	languageCode?: string;
	isPremium?: true;
	addedToAttachmentMenu?: true;
	canJoinGroups?: boolean;
	canReadAllGroupMessages?: boolean;
	supportsInlineQueries?: boolean;
}

export interface UserShared {
	requestId: number;
	userId: number;
}

export interface UserProfilePhotos {
	totalCount: number;
	photos: PhotoSize[][];
}
