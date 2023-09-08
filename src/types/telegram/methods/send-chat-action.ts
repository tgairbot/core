export enum ChatAction {
	Typing = "typing",
	UploadPhotom = "upload_photo",
	RecordVideo = "record_video",
	UploadVideo = "upload_video",
	RecorVoice = "record_voice",
	UploadVoice = "upload_voice",
	UploadDocument = "upload_document",
	ChooseSticker = "choose_sticker",
	FindLocation = "find_location",
	RecordVideoNote = "record_video_note",
	UploadVideoNote = "upload_video_note",
}

export interface SendChatAtion {
	chat_id: number | string;
	message_thread_id?: number;
	action: ChatAction;
}
