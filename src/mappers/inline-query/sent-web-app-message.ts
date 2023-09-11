import * as Telegram from "../../types/telegram";
import * as TgAirBot from "../../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../../utils/remove-undefined-keys-from-object";

export class SentWebAppMessageMapper {
	static toTAB(
		options: Telegram.SentWebAppMessage,
	): TgAirBot.SentWebAppMessage {
		const entity: TgAirBot.SentWebAppMessage = {
			inlineMessageId: options.inline_message_id,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.SentWebAppMessage>(
			entity,
		);
	}
}
