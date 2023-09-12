import { ReadStream } from "fs";

export interface SetChatPhoto {
	chat_id: number | string;
	photo: ReadStream;
}
