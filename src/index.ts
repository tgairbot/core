import { Methods } from "./api/methods";
import { Event } from "./event";
import { Message } from "./types/telegram";
import { Polling } from "./updates/polling";

async function bootstrap() {
	const polling = new Polling(
		"5608595917:AAGDGv6D9heC4nquo_AnuHlDU7w1SUi2bDk",
		{
			log: true,
		},
	);

	await polling.start();

	const methods = new Methods(
		"5608595917:AAGDGv6D9heC4nquo_AnuHlDU7w1SUi2bDk",
	);

	const me = await methods.getMe();
	console.log(me);

	Event.on("message", async (data: Message) => {
		console.log(data);

		if (data.text === "ban") {
			const message = await methods.banChatMember({
				userId: 5850998098,
				chatId: -1001910269553,
			});

			console.log("BAN");
		} else if (data.text === "unban") {
			const message = await methods.unbanChatMember({
				userId: 5850998098,
				chatId: -1001910269553,
			});

			console.log("UNBAN");
		}
	});
}

bootstrap();
