export interface ForwardMessage {
	chat_id: number | string;
	message_thread_id?: number;
	from_chat_id: number | string;
	disable_notification?: boolean;
	protect_content?: boolean;
	message_id: number;
}
