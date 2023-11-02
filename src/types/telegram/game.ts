import { Animation } from "./animation";
import { MessageEntity } from "./message";
import { PhotoSize } from "./photo";
import { User } from "./user";

export interface Game {
	title: string;
	description: string;
	photo: PhotoSize[];
	text?: string;
	text_entities?: MessageEntity[];
	animation?: Animation;
}

export interface GameHighScore {
	position: number;
	user: User;
	score: number;
}
