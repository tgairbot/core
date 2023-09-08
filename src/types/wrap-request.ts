export interface WrapRequest<T> {
	ok: boolean;
	result?: T;
	error_code?: number;
	description?: string;
}
