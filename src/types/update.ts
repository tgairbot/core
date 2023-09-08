export interface OptionsUpdates {
	limit?: number;
	timeout?: number;
	allowedUpdates?: Array<keyof UpdatedTypes>;
	interval?: number;
	log?: boolean;
}

export interface GetUpdates {
	offset?: number;
	limit?: number;
	timeout?: number;
	allowed_updates?: Array<keyof UpdatedTypes>;
}

export interface Update extends Partial<UpdatedTypes> {
	update_id: number;
}

export const AlovedUpdates: Array<keyof UpdatedTypes> = [
	"message",
	"edited_message",
	"channel_post",
	"edited_channel_post",
	"inline_query",
	"chosen_inline_result",
	"callback_query",
	"shipping_query",
	"pre_checkout_query",
	"poll",
	"poll_answer",
	"my_chat_member",
	"chat_member",
	"chat_join_request",
];

export interface UpdatedTypes {
	message: object;
	edited_message: object;
	channel_post: object;
	edited_channel_post: object;
	inline_query: object;
	chosen_inline_result: object;
	callback_query: object;
	shipping_query: object;
	pre_checkout_query: object;
	poll: object;
	poll_answer: object;
	my_chat_member: object;
	chat_member: object;
	chat_join_request: object;
}
