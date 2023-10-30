import { ChatAdministratorRights } from "../chat";

export interface SetMyDefaultAdministratorRights {
	rights?: ChatAdministratorRights;
	forChannels?: boolean;
}
