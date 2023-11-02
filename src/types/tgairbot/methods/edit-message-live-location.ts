import { InlineKeyboardMarkup } from "../keyboard";

export interface EditMessageLiveLocation {
	chatId?: number | string;
	messageId?: number;
	inlineMessageId?: string;
	latitude: string;
	longitude: string;
	horizontalAccuracy?: number;
	heading?: number;
	proximityAlertRadius?: number;
	replyMarkup?: InlineKeyboardMarkup;
}
