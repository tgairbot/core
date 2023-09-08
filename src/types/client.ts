import { IncomingHttpHeaders } from "http";

export interface Response<T> {
	statusCode?: number;
	statusMessage?: string;
	headers: IncomingHttpHeaders;
	body: T;
	url: URL;
	method?: null | string;
}
