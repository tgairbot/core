import * as Telegram from "../types/telegram";
import * as TgAirBot from "../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../utils/remove-undefined-keys-from-object";
import { AnimationMapper } from "./animation";
import { MessageMapper } from "./message";
import { PhotoMapper } from "./photo";
import { UserMapper } from "./user";

export class GameMapper {
	static toTAB(game: Telegram.Game): TgAirBot.Game {
		const entity: TgAirBot.Game = {
			text: game.text,
			photo: game.photo.map(PhotoMapper.toTAB),
			title: game.title,
			description: game.description,
			textEntities: game.text_entities
				? game.text_entities.map(MessageMapper.messageEntityToTAB)
				: undefined,
			animation: game.animation
				? AnimationMapper.toTAB(game.animation)
				: undefined,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.Game>(entity);
	}

	static gameHighScoreToTAB(
		options: Telegram.GameHighScore,
	): TgAirBot.GameHighScore {
		const entity: TgAirBot.GameHighScore = {
			user: UserMapper.toTAB(options.user),
			position: options.position,
			score: options.position,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.GameHighScore>(entity);
	}
}
