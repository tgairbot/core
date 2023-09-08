import * as Telegram from "../types/telegram";
import * as TgAirBot from "../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../utils/remove-undefined-keys-from-object";
import { AnimationMapper } from "./animation";
import { MessageMapper } from "./message";
import { PhotoMapper } from "./photo";

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
}
