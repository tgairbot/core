import { CallbackQuery } from "./callback-query";
import { ChatJoinRequest, ChatMemberUpdated } from "./chat";
import { ChosenInlineResult } from "./inline-query/chosen-inline-result";
import { InlineQuery } from "./inline-query/inline-query";
import { Message } from "./message";
import { PreCheckoutQuery } from "./payments/pre-checkout-query";
import { ShippingQuery } from "./payments/shipping-query";
import { Poll, PollAnswer } from "./poll";

export interface Update extends Partial<UpdatedTypes> {
	updateId: number;
}

export interface UpdatedTypes {
	message: Message;
	editedMessage: Message;
	channelPost: Message;
	editedChannelPost: Message;
	inlineQuery: InlineQuery;
	chosenInlineResult: ChosenInlineResult;
	callbackQuery: CallbackQuery;
	shippingQuery: ShippingQuery;
	preCheckoutQuery: PreCheckoutQuery;
	poll: Poll;
	pollAnswer: PollAnswer;
	myChatMember: ChatMemberUpdated;
	chatMember: ChatMemberUpdated;
	chatJoinRequest: ChatJoinRequest;
}
