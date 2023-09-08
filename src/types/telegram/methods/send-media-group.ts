import {
	InputMediaAudio,
	InputMediaDocument,
	InputMediaPhoto,
	InputMediaVideo,
} from "../input";

export interface SendMediaGroup {
	chat_id: number | string;
	message_thread_id?: number;
	media: Array<
		InputMediaAudio | InputMediaDocument | InputMediaPhoto | InputMediaVideo
	>;
	disable_notification?: boolean;
	protect_content?: boolean;
	reply_to_message_id?: number;
	allow_sending_without_reply?: boolean;
}
