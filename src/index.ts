import { Methods } from "./api/methods";
import { Polling } from "./updates/polling";
import { Message } from "./types/tgairbot";

const TOKEN = "5608595917:AAGDGv6D9heC4nquo_AnuHlDU7w1SUi2bDk";

const polling = new Polling(TOKEN, { log: false });

polling.start().then();

const methods = new Methods(TOKEN);

const callback1 = async (data: Message) => {
	const message = await methods.sendMessage({
		replyToMessageId: data.messageId,
		chatId: data.chat.id,
		text: "One handler",
	});

	console.debug("==========>", 1);
};

const callback2 = async (data: Message) => {
	const message = await methods.sendMessage({
		replyToMessageId: data.messageId,
		chatId: data.chat.id,
		text: "Two handler",
	});

	console.debug("==========>", 2);
};

const callback3 = async (data: Message) => {
	const message = await methods.sendMessage({
		replyToMessageId: data.messageId,
		chatId: data.chat.id,
		text: "Three handler",
	});

	console.debug("=========", 3);

	polling.handler.onMessage(
		data => {
			console.log("=============>", 50);
		},
		({ text }) => text === "50",
	);
};

polling.handler
	.onMessage(callback1, ({ text }) => text === "1")
	.onMessage(callback2, ({ text }) => text === "2")
	.onMessage(callback1, ({ photo }) => !!photo)
	.onMessage(callback3, ({ text }) => text === "3")
	.onEditedMessage(callback3);
