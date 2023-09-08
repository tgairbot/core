import { IncomingMessage, ServerResponse } from "http";
import http from "http";
import { Response } from "../types/server";

export type CallbackFn = (options: { host?: string; port?: number }) => void;
export type HandleFn = <T>(update: Response<T>) => Promise<void>;

export class Server {
	private readonly server: http.Server;
	private handle?: HandleFn;

	constructor(private readonly host: string, private port?: number) {
		this.server = this._makeServer();
	}

	set setHandle(handle: <T>(update: Response<T>) => Promise<void>) {
		this.handle = handle;
	}

	listen(callback?: CallbackFn) {
		const listener = callback
			? () => callback({ host: this.host, port: this.port })
			: undefined;

		if (this.port) {
			this.server.listen(this.port, this.host, listener);
		} else {
			this.server.listen(this.host, listener);
		}
	}

	private _makeServer<Body>() {
		return http.createServer(
			async (
				req: InstanceType<typeof IncomingMessage>,
				res: InstanceType<typeof ServerResponse>,
			) => {
				const request = await this._parseRequest<Body>(req);

				if (this.handle) {
					await this.handle(request);
				}

				res.writeHead(200);
				res.end();
			},
		);
	}

	private _parseRequest<Body>(
		req: InstanceType<typeof IncomingMessage>,
	): Promise<Response<Body>> {
		return new Promise((resolve, reject) => {
			try {
				let body = "";
				const { headers, method, url } = req;

				req.on("data", part => (body += part));
				req.on("error", (error: Error) => reject(error));
				req.on("end", () => {
					if (headers["content-type"] === "application/json")
						body = JSON.parse(body) as unknown as string;

					resolve({ headers, body: body as Body, method, url });
				});
			} catch (error) {
				reject(error.message);
			}
		});
	}
}
