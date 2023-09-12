import { ReadStream } from "fs";

export interface SetChatPhoto {
	chatId: number | string;
	photo: ReadStream;
}
