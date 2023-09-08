import { IncomingHttpHeaders } from "http";

export interface Response<T> {
	headers: IncomingHttpHeaders;
	body: T;
	url?: string;
	method?: null | string;
}
