import { PhotoSize } from "./photo";

export interface User {
	id: number;
	is_bot: boolean;
	first_name: string;
	last_name?: string;
	username?: string;
	language_code?: string;
	is_premium?: true;
	added_to_attachment_menu?: true;
	can_join_groups?: boolean;
	can_read_all_group_messages?: boolean;
	supports_inline_queries?: boolean;
}

export interface UserShared {
	request_id: number;
	user_id: number;
}

export interface UserProfilePhotos {
	total_count: number;
	photos: PhotoSize[][];
}
