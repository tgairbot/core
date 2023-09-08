import {
	InputMediaAudio,
	InputMediaDocument,
	InputMediaPhoto,
	InputMediaVideo,
} from "../input";

export interface SendMediaGroup {
	chatId: number | string;
	messageThreadId?: number;
	media: Array<
		InputMediaAudio | InputMediaDocument | InputMediaPhoto | InputMediaVideo
	>;
	disableNotification?: boolean;
	protectContent?: boolean;
	replyToMessageId?: number;
	allowSendingWithoutReply?: boolean;
}
