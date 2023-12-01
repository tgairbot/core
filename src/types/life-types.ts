import { HandlerCallback } from "./handler-callback";
import { Layout } from "../layouts/layout";
import * as TgAirBot from "@tgairbot/types";
import { Middleware } from "../middlewares/middleware";

export type LifeType<T extends keyof TgAirBot.UpdatedTypes> =
	| HandlerCallback<T>
	| Middleware<T>;
