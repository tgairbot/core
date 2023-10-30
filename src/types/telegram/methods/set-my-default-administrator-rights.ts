import { ChatAdministratorRights } from "../chat";

export interface SetMyDefaultAdministratorRights {
	rights?: ChatAdministratorRights;
	for_channels?: boolean;
}
