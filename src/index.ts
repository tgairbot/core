import { Methods } from "./api/methods";
import { Handler } from "./handler";
import { Polling } from "./updates/polling";

async function bootstrap() {
	const polling = new Polling(
		"5608595917:AAGDGv6D9heC4nquo_AnuHlDU7w1SUi2bDk",
		{
			log: false,
		},
	);

	await polling.start();

	const methods = new Methods(
		"5608595917:AAGDGv6D9heC4nquo_AnuHlDU7w1SUi2bDk",
	);

	const me = await methods.getMe();
	console.log(me);

	Handler.onMessage(async data => {
		if (data.text === "1") {
			const message = await methods.sendMessage({
				replyToMessageId: data.messageId,
				chatId: data.chat.id,
				text: "One handler",
			});

			console.debug(JSON.stringify(message, null, 2));
		}
	});

	Handler.onMessage(async data => {
		if (data.text === "2") {
			const message = await methods.sendMessage({
				replyToMessageId: data.messageId,
				chatId: data.chat.id,
				text: "Two handler",
			});

			console.debug(JSON.stringify(message, null, 2));
		}
	});
}

bootstrap();
