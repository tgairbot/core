import http, { RequestOptions } from "https";
import FormData from "form-data";
import { HOST } from "./base-url";
import { IncomingMessage } from "http";
import { Response } from "../types/client";

export class Client {
	constructor(private method: string, private token: string) {}

	get url(): URL {
		return new URL(`https://${HOST}/bot${this.token}/${this.method}`);
	}

	set setMethod(method: string) {
		this.method = method;
	}

	async send<Body, Params extends object = any>(
		params?: Params,
	): Promise<Response<Body>> {
		if (params) {
			return await this._withParams<Body, Params>(params);
		} else {
			return await this._withoutParams<Body>();
		}
	}

	async sendForm<Body, Params extends object = any>(
		params: Params,
	): Promise<Response<Body>> {
		const formData = new FormData();
		console.log(params);
		Object.entries(params).forEach(([key, value]) => {
			if (Array.isArray(value)) {
				formData.append(key, JSON.stringify(value));
			} else {
				formData.append(key, value);
			}
		});

		return new Promise((resolve, reject) => {
			formData.submit(this.url.toString(), (err, res) => {
				if (err) reject(err);
				let body = "";

				res.on("data", part => (body += part));
				res.on("error", (error: Error) => reject(error));
				res.on("end", () => {
					const parse = this._parseRes<Body>(res, body);

					resolve(parse);
				});
			});
		});
	}

	private _withParams<Body, Params extends object>(
		params: Params,
	): Promise<Response<Body>> {
		return new Promise((resolve, reject) => {
			const body = JSON.stringify(params);

			const options: RequestOptions = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Content-Length": Buffer.byteLength(body),
				},
			};

			http.request(this.url, options, (res: IncomingMessage) => {
				let body = "";

				res.on("data", part => (body += part));
				res.on("error", (error: Error) => reject(error));
				res.on("end", () => {
					const parse = this._parseRes<Body>(res, body);

					resolve(parse);
				});
			}).end(body);
		});
	}

	private _withoutParams<Body>(): Promise<Response<Body>> {
		return new Promise((resolve, reject) => {
			http.request(
				this.url,
				{ method: "POST" },
				(res: IncomingMessage) => {
					let body = "";

					res.on("data", part => (body += part));
					res.on("error", (error: Error) => reject(error));
					res.on("end", () => {
						const parse = this._parseRes<Body>(res, body);

						resolve(parse);
					});
				},
			).end();
		});
	}

	private _parseRes<Body>(res: IncomingMessage, body: string) {
		const { statusCode, statusMessage, headers, method } = res;

		if (headers["content-type"] === "application/json")
			body = JSON.parse(body) as unknown as string;

		const result = {
			statusCode,
			statusMessage,
			headers,
			body: body as Body,
			url: this.url,
			method,
		};

		if (
			!result.statusCode ||
			result.statusCode < 200 ||
			result.statusCode >= 300
		) {
			throw result;
		} else {
			return result;
		}
	}
}
