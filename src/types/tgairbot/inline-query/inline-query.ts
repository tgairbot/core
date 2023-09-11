import { ChatType } from "../../telegram";
import { Location } from "../location";
import { User } from "../user";

export interface InlineQuery {
	id: string;
	from: User;
	query: string;
	offset: string;
	chatType?: ChatType;
	location?: Location;
}
