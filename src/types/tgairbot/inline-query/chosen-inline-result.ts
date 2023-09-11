import { Location } from "../location";
import { User } from "../user";

export interface ChosenInlineResult {
	resultId: string;
	from: User;
	location?: Location;
	inlineMessageId?: string;
	query?: string;
}
