import * as Telegram from "../types/telegram";
import * as TgAirBot from "../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../utils/remove-undefined-keys-from-object";

export class ContactMapper {
	static toTAB(contact: Telegram.Contact): TgAirBot.Contact {
		const entity: TgAirBot.Contact = {
			vcard: contact.vcard,
			userId: contact.user_id,
			firstName: contact.first_name,
			lastName: contact.last_name,
			phoneNumber: contact.phone_number,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.Contact>(entity);
	}
}
