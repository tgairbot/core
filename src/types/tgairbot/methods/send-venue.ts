import {
	ForceReply,
	InlineKeyboardMarkup,
	ReplyKeyboardMarkup,
	ReplyKeyboardRemove,
} from "../keyboard";

export interface SendVenue {
	chatId: number | string;
	messageThreadId?: number;
	latitude: number;
	longitude: number;
	title: string;
	address: string;
	foursquareId?: string;
	foursquareType?: string;
	googlePlaceId?: string;
	googlePlaceType?: string;
	disableNotification?: boolean;
	protectContent?: boolean;
	replyToMessageId?: number;
	allowSendingWithoutReply?: boolean;
	replyMarkup?:
		| InlineKeyboardMarkup
		| ReplyKeyboardMarkup
		| ReplyKeyboardRemove
		| ForceReply;
}
