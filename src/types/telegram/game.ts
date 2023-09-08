import { Animation } from "./animation";
import { MessageEntity } from "./message";
import { PhotoSize } from "./photo";

export interface Game {
	title: string;
	description: string;
	photo: PhotoSize[];
	text?: string;
	text_entities?: MessageEntity[];
	animation?: Animation;
}
