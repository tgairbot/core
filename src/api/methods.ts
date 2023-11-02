import * as Telegram from "../types/telegram";
import * as TgAirBot from "../types/tgairbot";

import { WrapRequest } from "../types/wrap-request";

import { Client } from "./client";

import { FileMapper } from "../mappers/file";
import { MessageMapper } from "../mappers/message";
import { BanChatMemberMapper } from "../mappers/methods/ban-chat-member";
import { CopyMessageMapper } from "../mappers/methods/copy-message";
import { ForwardMessageMapper } from "../mappers/methods/forward-message";
import { GetFileMapper } from "../mappers/methods/get-file";
import { GetUserProfilePhotosMapper } from "../mappers/methods/get-user-profile-photos";
import { SendAnimationMapper } from "../mappers/methods/send-animation";
import { SendAudioMapper } from "../mappers/methods/send-audio";
import { SendChatActionMapper } from "../mappers/methods/send-chat-action";
import { SendContactMapper } from "../mappers/methods/send-contact";
import { SendDiceMapper } from "../mappers/methods/send-dice";
import { SendDocumentMapper } from "../mappers/methods/send-document";
import { SendLocationMapper } from "../mappers/methods/send-location";
import { SendMediaGroupMapper } from "../mappers/methods/send-media-group";
import { SendMessageMapper } from "../mappers/methods/send-message";
import { SendPhotoMapper } from "../mappers/methods/send-photo";
import { SendPollMapper } from "../mappers/methods/send-poll";
import { SendVenueMapper } from "../mappers/methods/send-venue";
import { SendVideoMapper } from "../mappers/methods/send-video";
import { SendVideoNoteMapper } from "../mappers/methods/send-video-note";
import { SendVoiceMapper } from "../mappers/methods/send-voice";
import { UnbanChatMemberMapper } from "../mappers/methods/unban-chat-member";
import { UserMapper } from "../mappers/user";
import { RestrictChatMemberMapper } from "../mappers/methods/restrict-chat-member";
import { PromoteChatMemberMapper } from "../mappers/methods/promote-chat-member";
import { SetChatAdministratorCustomTitleMapper } from "../mappers/methods/set-chat-administrator-custom-title";
import { BanChatSenderChatMapper } from "../mappers/methods/ban-chat-sender-chat";
import { UnbanChatSenderChatMapper } from "../mappers/methods/unban-chat-sender-chat";
import { SetChatPermissionsMapper } from "../mappers/methods/set-chat-permissions";
import { ExportChatInviteLinkMapper } from "../mappers/methods/export-chat-invite-link";
import { CreateChatInviteLinkMapper } from "../mappers/methods/create-chat-invite-link";
import { ChatMapper } from "../mappers/chat";
import { EditChatInviteLinkMapper } from "../mappers/methods/edit-chat-invite-link";
import { RevokeChatInviteLinkMapper } from "../mappers/methods/revoke-chat-invite-link";
import { ApproveChatJoinRequestMapper } from "../mappers/methods/approve-chat-join-request";
import { DeclineChatJoinRequestMapper } from "../mappers/methods/decline-chat-join-request";
import { SetChatPhotoMapper } from "../mappers/methods/set-chat-photo";
import { DeleteChatPhotoMapper } from "../mappers/methods/delete-chat-photo";
import { SetChatTitleMapper } from "../mappers/methods/set-chat-title";
import { SetChatDescriptionMapper } from "../mappers/methods/set-chat-description";
import { PinChatMessageMapper } from "../mappers/methods/pin-chat-message";
import { UnpinChatMessageMapper } from "../mappers/methods/unpin-chat-message";
import { UnpinAllChatMessages } from "../mappers/methods/unpin-all-chat-messages";
import { LeaveChatMapper } from "../mappers/methods/leave-chat";
import { GetChatMapper } from "../mappers/methods/get-chat";
import { GetChatAdministratorsMapper } from "../mappers/methods/get-chat-administrators";
import { GetChatMemberCountMapper } from "../mappers/methods/get-chat-member-count";
import { GetChatMemberMapper } from "../mappers/methods/get-chat-member";
import { SetChatStickerSetMapper } from "../mappers/methods/set-chat-sticker-set";
import { DeleteChatStickerSetMapper } from "../mappers/methods/delete-chat-sticker-set";
import { StickerMapper } from "../mappers/sticker";
import { CreateForumTopicMapper } from "../mappers/methods/create-forum-topic";
import { ForumMapper } from "../mappers/forum";
import { EditForumTopicMapper } from "../mappers/methods/edit-forum-topic";
import { CloseForumTopicMapper } from "../mappers/methods/close-forum-topic";
import { ReopenForumTopicMapper } from "../mappers/methods/reopen-forum-topic";
import { DeleteForumTopicMapper } from "../mappers/methods/delete-forum-topic";
import { UnpinAllForumTopicMessagesMapper } from "../mappers/methods/unpin-all-forum-topic-messages";
import { EditGeneralForumTopicMapper } from "../mappers/methods/edit-general-forum-topic";
import { CloseGeneralForumTopicMapper } from "../mappers/methods/close-general-forum-topic";
import { ReopenGeneralForumTopicMapper } from "../mappers/methods/reopen-general-forum-topic";
import { HideGeneralForumTopicMapper } from "../mappers/methods/hide-general-forum-topic";
import { UnhideGeneralForumTopicMapper } from "../mappers/methods/unhide-general-forum-topic";
import { UnpinAllGeneralForumTopicMessagesMapper } from "../mappers/methods/unpin-all-general-forum-topic-messages";
import { AnswerCallbackQueryMapper } from "../mappers/methods/answer-callback-query";
import { SetMyCommandsMapper } from "../mappers/methods/set-my-commands";
import { DeleteMyCommandsMapper } from "../mappers/methods/delete-my-commands";
import { GetMyCommandsMapper } from "../mappers/methods/get-my-commands";
import {
	BotCommandMapper,
	BotDescriptionMapper,
	BotNameMapper,
	BotShortDescriptionMapper,
} from "../mappers/bot-command";
import { SetMyNameMapper } from "../mappers/methods/set-my-name";
import { GetMyNameMapper } from "../mappers/methods/get-my-name";
import { SetMyDescriptionMapper } from "../mappers/methods/set-my-description";
import { GetMyDescriptionMapper } from "../mappers/methods/get-my-description";
import { SetMyShortDescriptionMapper } from "../mappers/methods/set-my-short-description";
import { GetMyShortDescriptionMapper } from "../mappers/methods/get-my-short-description";
import { SetChatMenuButtonMapper } from "../mappers/methods/set-chat-menu-button";
import { GetChatMenuButtonMapper } from "../mappers/methods/get-chat-menu-button";
import { MenuButtonMapper } from "../mappers/menu";
import { SetMyDefaultAdministratorRightsMapper } from "../mappers/methods/set-my-default-administrator-rights";
import { GetMyDefaultAdministratorRightsMapper } from "../mappers/methods/get-my-default-administrator-rights";
import { EditMessageTextMapper } from "../mappers/methods/edit-message-text";
import { EditMessageCaptionMapper } from "../mappers/methods/edit-message-caption";
import { EditMessageMediaMapper } from "../mappers/methods/edit-message-media";
import { EditMessageLiveLocationMapper } from "../mappers/methods/edit-message-live-location";
import { StopMessageLiveLocationMapper } from "../mappers/methods/stop-message-live-location";
import { EditMessageReplyMarkupMapper } from "../mappers/methods/edit-message-reply-markup";
import { StopPollMapper } from "../mappers/methods/stop-poll";
import { DeleteMessageMapper } from "../mappers/methods/delete-message";
import { SendStickerMapper } from "../mappers/methods/send-sticker";
import { GetStickerSetMapper } from "../mappers/methods/get-sticker-set";
import { GetCustomEmojiStickersMapper } from "../mappers/methods/get-custom-emoji-stickers";
import { UploadStickerFileMapper } from "../mappers/methods/upload-sticker-file";
import { CreateNewStickerMapper } from "../mappers/methods/create-new-sticker";
import { AddStickerToSetMapper } from "../mappers/methods/add-sticker-to-set";
import { SetStickerPositionInSetMapper } from "../mappers/methods/set-sticker-position-in-set";
import { DeleteStickerFromSetMapper } from "../mappers/methods/delete-sticker-from-set";
import { SetStickerEmojiListMapper } from "../mappers/methods/set-sticker-emoji-list";
import { SetStickerKeywordsMapper } from "../mappers/methods/set-sticker-keywords";
import { SetStickerMaskPositionMapper } from "../mappers/methods/set-sticker-mask-position";
import { SetStickerSetTitleMapper } from "../mappers/methods/set-sticker-set-title";
import { SetStickerSetThumbnailMapper } from "../mappers/methods/set-sticker-set-thumbnail";
import { SetCustomEmojiStickerSetThumbnailMapper } from "../mappers/methods/set-custom-emoji-sticker-set-thumbnail";
import { DeleteStickerSetMapper } from "../mappers/methods/delete-sticker-set";
import { AnswerInlineQueryMapper } from "../mappers/inline-query/answer-inline-query";
import { AnswerWebAppQueryMapper } from "../mappers/inline-query/answer-web-app-query";
import { SentWebAppMessageMapper } from "../mappers/inline-query/sent-web-app-message";
import { SendInvoiceMapper } from "../mappers/methods/send-invoice";
import { CreateInvoiceLinkMapper } from "../mappers/methods/create-invoice-link";
import { AnswerShippingQueryMapper } from "../mappers/methods/answer-shipping-query";
import { AnswerPreCheckoutQueryMapper } from "../mappers/methods/answer-pre-checkout-query";
import { SetPassportDataErrorsMapper } from "../mappers/methods/set-passport-data-errors";
import { SendGameMapper } from "../mappers/methods/send-game";
import { SetGameScoreMapper } from "../mappers/methods/set-game-score";
import { GetGameHighScoresMapper } from "../mappers/methods/get-game-high-scores";
import { GameMapper } from "../mappers/game";

class BaseMethods {
	constructor(private readonly token: string) {}

	protected async send<T>(
		methodName: string,
		params?: Record<string, any>,
	): Promise<T> {
		const { body } = await new Client(methodName, this.token).send<
			WrapRequest<T>
		>(params);

		if (body.result && body.ok) {
			return body.result;
		} else {
			throw body.result;
		}
	}

	protected async sendForm<T>(
		methodName: string,
		params?: Record<string, any>,
	) {
		const { body } = await new Client(methodName, this.token).sendForm<
			WrapRequest<T>
		>(params);

		if (body.result && body.ok) {
			return body.result;
		} else {
			throw body.result;
		}
	}
}
export class Methods extends BaseMethods {
	constructor(token: string) {
		super(token);
	}

	async getMe(): Promise<TgAirBot.User> {
		return UserMapper.toTAB(await this.send<Telegram.User>("getMe"));
	}

	async logOut(): Promise<true> {
		return this.send<true>("logOut");
	}

	async close(): Promise<true> {
		return this.send<true>("close");
	}

	async sendMessage(
		options: TgAirBot.SendMessage,
	): Promise<TgAirBot.Message> {
		const params = SendMessageMapper.toTelegram(options);

		const message = await this.send<Telegram.Message>(
			"sendMessage",
			params,
		);

		return MessageMapper.toTAB(message);
	}

	async forwardMessage(
		options: TgAirBot.ForwardMessage,
	): Promise<TgAirBot.Message> {
		const params = ForwardMessageMapper.toTelegram(options);

		const message = await this.send<Telegram.Message>(
			"forwardMessage",
			params,
		);

		return MessageMapper.toTAB(message);
	}

	async copyMessage(
		options: TgAirBot.CopyMessage,
	): Promise<TgAirBot.MessageId> {
		const params = CopyMessageMapper.toTelegram(options);

		const messageId = await this.send<Telegram.MessageId>(
			"copyMessage",
			params,
		);

		return MessageMapper.messageIdToTAB(messageId);
	}

	async sendPhoto(options: TgAirBot.SendPhoto): Promise<TgAirBot.Message> {
		const params = SendPhotoMapper.toTelegram(options);

		if (typeof params.photo === "string") {
			const message = await this.send<Telegram.Message>(
				"sendPhoto",
				params,
			);

			return MessageMapper.toTAB(message);
		} else {
			const message = await this.sendForm<Telegram.Message>(
				"sendPhoto",
				params,
			);

			return MessageMapper.toTAB(message);
		}
	}

	async sendAudio(options: TgAirBot.SendAudio): Promise<TgAirBot.Message> {
		const params = SendAudioMapper.toTelegram(options);

		if (
			typeof params.audio !== "string" ||
			(params.thumbnail && typeof params.thumbnail !== "string")
		) {
			const message = await this.sendForm<Telegram.Message>(
				"sendAudio",
				params,
			);

			return MessageMapper.toTAB(message);
		} else {
			const message = await this.send<Telegram.Message>(
				"sendAudio",
				params,
			);

			return MessageMapper.toTAB(message);
		}
	}

	async sendDocument(
		options: TgAirBot.SendDocument,
	): Promise<TgAirBot.Message> {
		const params = SendDocumentMapper.toTelegram(options);

		if (
			typeof params.document !== "string" ||
			(params.thumbnail && typeof params.thumbnail !== "string")
		) {
			const message = await this.sendForm<Telegram.Message>(
				"sendDocument",
				params,
			);

			return MessageMapper.toTAB(message);
		} else {
			const message = await this.send<Telegram.Message>(
				"sendDocument",
				params,
			);

			return MessageMapper.toTAB(message);
		}
	}

	async sendVideo(options: TgAirBot.SendVideo): Promise<TgAirBot.Message> {
		const params = SendVideoMapper.toTelegram(options);

		if (
			typeof params.video !== "string" ||
			(params.thumbnail && typeof params.thumbnail !== "string")
		) {
			const message = await this.sendForm<Telegram.Message>(
				"sendVideo",
				params,
			);

			return MessageMapper.toTAB(message);
		} else {
			const message = await this.send<Telegram.Message>(
				"sendVideo",
				params,
			);

			return MessageMapper.toTAB(message);
		}
	}

	async sendAnimation(
		options: TgAirBot.SendAnimation,
	): Promise<TgAirBot.Message> {
		const params = SendAnimationMapper.toTelegram(options);

		if (
			typeof params.animation !== "string" ||
			(params.thumbnail && typeof params.thumbnail !== "string")
		) {
			const message = await this.sendForm<Telegram.Message>(
				"sendAnimation",
				params,
			);

			return MessageMapper.toTAB(message);
		} else {
			const message = await this.send<Telegram.Message>(
				"sendAnimation",
				params,
			);

			return MessageMapper.toTAB(message);
		}
	}

	async sendVoice(options: TgAirBot.SendVoice): Promise<TgAirBot.Message> {
		const params = SendVoiceMapper.toTelegram(options);

		if (typeof params.voice !== "string") {
			const message = await this.sendForm<Telegram.Message>(
				"sendVoice",
				params,
			);

			return MessageMapper.toTAB(message);
		} else {
			const message = await this.send<Telegram.Message>(
				"sendVoice",
				params,
			);

			return MessageMapper.toTAB(message);
		}
	}

	async sendVideoNote(
		options: TgAirBot.SendVideoNote,
	): Promise<TgAirBot.Message> {
		const params = SendVideoNoteMapper.toTelegram(options);

		if (typeof params.video_note !== "string") {
			const message = await this.sendForm<Telegram.Message>(
				"sendVideoNote",
				params,
			);

			return MessageMapper.toTAB(message);
		} else {
			const message = await this.send<Telegram.Message>(
				"sendVideoNote",
				params,
			);

			return MessageMapper.toTAB(message);
		}
	}

	async sendMediaGroup(
		options: TgAirBot.SendMediaGroup,
	): Promise<TgAirBot.Message[]> {
		const params = SendMediaGroupMapper.toTelegram(options);

		const isNoForm = params.media.every(
			(
				data:
					| Telegram.InputMediaAudio
					| Telegram.InputMediaDocument
					| Telegram.InputMediaPhoto
					| Telegram.InputMediaVideo,
			) =>
				!(data as Telegram.InputMediaVideo).thumbnail ||
				typeof (data as Telegram.InputMediaVideo).thumbnail !==
					"string",
		);

		if (isNoForm) {
			const messages = await this.send<Telegram.Message[]>(
				"sendMediaGroup",
				params,
			);

			return messages.map(MessageMapper.toTAB);
		} else {
			const messages = await this.sendForm<Telegram.Message[]>(
				"sendMediaGroup",
				params,
			);

			return messages.map(MessageMapper.toTAB);
		}
	}

	async sendLocation(
		options: TgAirBot.SendLocation,
	): Promise<TgAirBot.Message> {
		const params = SendLocationMapper.toTelegram(options);

		const message = await this.send<Telegram.Message>(
			"sendLocation",
			params,
		);

		return MessageMapper.toTAB(message);
	}

	async sendVenue(options: TgAirBot.SendVenue): Promise<TgAirBot.Message> {
		const params = SendVenueMapper.toTelegram(options);

		const message = await this.send<Telegram.Message>("sendVenue", params);

		return MessageMapper.toTAB(message);
	}

	async sendContact(
		options: TgAirBot.SendContact,
	): Promise<TgAirBot.Message> {
		const params = SendContactMapper.toTelegram(options);

		const message = await this.send<Telegram.Message>(
			"sendContact",
			params,
		);

		return MessageMapper.toTAB(message);
	}

	async sendPoll(options: TgAirBot.SendPoll): Promise<TgAirBot.Message> {
		const params = SendPollMapper.toTelegram(options);

		const message = await this.send<Telegram.Message>("sendPoll", params);

		return MessageMapper.toTAB(message);
	}

	async sendDice(options: TgAirBot.SendDice): Promise<TgAirBot.Message> {
		const params = SendDiceMapper.toTelegram(options);

		const message = await this.send<Telegram.Message>("sendDice", params);

		return MessageMapper.toTAB(message);
	}

	async sendChatAction(options: TgAirBot.SendChatAtion): Promise<true> {
		const params = SendChatActionMapper.toTelegram(options);

		return this.send<true>("sendChatAction", params);
	}

	async getUserProfilePhotos(
		options: TgAirBot.GetUserProfilePhotos,
	): Promise<TgAirBot.UserProfilePhotos> {
		const params = GetUserProfilePhotosMapper.toTelegram(options);

		const userProfilePhotos = await this.send<Telegram.UserProfilePhotos>(
			"getUserProfilePhotos",
			params,
		);

		return UserMapper.userProfilePhotosToTAB(userProfilePhotos);
	}

	async getFile(options: TgAirBot.GetFile): Promise<TgAirBot.File> {
		const params = GetFileMapper.toTelegram(options);

		const file = await this.send<Telegram.File>("getFile", params);

		return FileMapper.toTAB(file);
	}

	async banChatMember(options: TgAirBot.BanChatMember): Promise<true> {
		const params = BanChatMemberMapper.toTelegram(options);

		return this.send<true>("banChatMember", params);
	}

	async unbanChatMember(options: TgAirBot.UnbanChatMember): Promise<true> {
		const params = UnbanChatMemberMapper.toTelegram(options);

		return this.send<true>("unbanChatMember", params);
	}

	async restrictChatMember(
		options: TgAirBot.RestrictChatMember,
	): Promise<true> {
		const params = RestrictChatMemberMapper.toTelegram(options);

		return this.send<true>("restrictChatMember", params);
	}

	async promoteChatMember(
		options: TgAirBot.PromoteChatMember,
	): Promise<true> {
		const params = PromoteChatMemberMapper.toTelegram(options);

		return this.send<true>("promoteChatMember", params);
	}

	async setChatAdministratorCustomTitle(
		options: TgAirBot.SetChatAdministratorCustomTitle,
	): Promise<true> {
		const params =
			SetChatAdministratorCustomTitleMapper.toTelegram(options);

		return this.send<true>("setChatAdministratorCustomTitle", params);
	}

	async banChatSenderChat(
		options: TgAirBot.BanChatSenderChat,
	): Promise<true> {
		const params = BanChatSenderChatMapper.toTelegram(options);

		return this.send<true>("banChatSenderChat", params);
	}

	async unbanChatSenderChat(
		options: TgAirBot.UnbanChatSenderChat,
	): Promise<true> {
		const params = UnbanChatSenderChatMapper.toTelegram(options);

		return this.send<true>("unbanChatSenderChat", params);
	}

	async setChatPermissions(
		options: TgAirBot.SetChatPermissions,
	): Promise<true> {
		const params = SetChatPermissionsMapper.toTelegram(options);

		return this.send<true>("setChatPermissions", params);
	}

	async exportChatInviteLink(
		options: TgAirBot.ExportChatInviteLink,
	): Promise<string> {
		const params = ExportChatInviteLinkMapper.toTelegram(options);

		return this.send<string>("exportChatInviteLink", params);
	}

	async createChatInviteLink(
		options: TgAirBot.CreateChatInviteLink,
	): Promise<TgAirBot.ChatInviteLink> {
		const params = CreateChatInviteLinkMapper.toTelegram(options);

		const inviteLink = await this.send<Telegram.ChatInviteLink>(
			"createChatInviteLink",
			params,
		);

		return ChatMapper.chatInviteLinkToTAB(inviteLink);
	}

	async editChatInviteLink(
		options: TgAirBot.EditChatInviteLink,
	): Promise<TgAirBot.ChatInviteLink> {
		const params = EditChatInviteLinkMapper.toTelegram(options);

		const inviteLink = await this.send<Telegram.ChatInviteLink>(
			"editChatInviteLink",
			params,
		);

		return ChatMapper.chatInviteLinkToTAB(inviteLink);
	}

	async revokeChatInviteLink(
		options: TgAirBot.RevokeChatInviteLink,
	): Promise<TgAirBot.ChatInviteLink> {
		const params = RevokeChatInviteLinkMapper.toTelegram(options);

		const inviteLink = await this.send<Telegram.ChatInviteLink>(
			"revokeChatInviteLink",
			params,
		);

		return ChatMapper.chatInviteLinkToTAB(inviteLink);
	}

	async approveChatJoinRequest(
		options: TgAirBot.ApproveChatJoinRequest,
	): Promise<true> {
		const params = ApproveChatJoinRequestMapper.toTelegram(options);

		return this.send<true>("approveChatJoinRequest", params);
	}

	async declineChatJoinRequest(
		options: TgAirBot.DeclineChatJoinRequest,
	): Promise<true> {
		const params = DeclineChatJoinRequestMapper.toTelegram(options);

		return this.send<true>("declineChatJoinRequest", params);
	}

	async setChatPhoto(options: TgAirBot.SetChatPhoto): Promise<true> {
		const params = SetChatPhotoMapper.toTelegram(options);

		return this.sendForm<true>("setChatPhoto", params);
	}

	async deleteChatPhoto(options: TgAirBot.DeleteChatPhoto): Promise<true> {
		const params = DeleteChatPhotoMapper.toTelegram(options);

		return this.send<true>("deleteChatPhoto", params);
	}

	async setChatTitle(options: TgAirBot.SetChatTitle): Promise<true> {
		const params = SetChatTitleMapper.toTelegram(options);

		return this.send<true>("setChatTitle", params);
	}

	async setChatDescription(
		options: TgAirBot.SetChatDescription,
	): Promise<true> {
		const params = SetChatDescriptionMapper.toTelegram(options);

		return this.send<true>("setChatDescription", params);
	}

	async pinChatMessage(options: TgAirBot.PinChatMessage): Promise<true> {
		const params = PinChatMessageMapper.toTelegram(options);

		return this.send<true>("pinChatMessage", params);
	}

	async unpinChatMessage(options: TgAirBot.UnpinChatMessage): Promise<true> {
		const params = UnpinChatMessageMapper.toTelegram(options);

		return this.send<true>("unpinChatMessage", params);
	}

	async unpinAllChatMessages(
		options: TgAirBot.UnpinAllChatMessages,
	): Promise<true> {
		const params = UnpinAllChatMessages.toTelegram(options);

		return this.send<true>("unpinAllChatMessages", params);
	}

	async leaveChat(options: TgAirBot.LeaveChat): Promise<true> {
		const params = LeaveChatMapper.toTelegram(options);

		return this.send<true>("leaveChat", params);
	}

	async getChat(options: TgAirBot.GetChat): Promise<TgAirBot.Chat> {
		const params = GetChatMapper.toTelegram(options);

		const chat = await this.send<Telegram.Chat>("getChat", params);

		return ChatMapper.toTAB(chat);
	}

	async getChatAdministrators(
		options: TgAirBot.GetChatAdministrators,
	): Promise<TgAirBot.ChatMember[]> {
		const params = GetChatAdministratorsMapper.toTelegram(options);

		const administrators = await this.send<Telegram.ChatMember[]>(
			"getChatAdministrators",
			params,
		);

		return administrators.map(ChatMapper.chatMemberToTab);
	}

	async getChatMemberCount(
		options: TgAirBot.GetChatMemberCount,
	): Promise<number> {
		const params = GetChatMemberCountMapper.toTelegram(options);

		return this.send<number>("getChatMemberCount", params);
	}

	async getChatMember(
		options: TgAirBot.GetChatMember,
	): Promise<TgAirBot.ChatMember> {
		const params = GetChatMemberMapper.toTelegram(options);

		const member = await this.send<Telegram.ChatMember>(
			"getChatMember",
			params,
		);

		return ChatMapper.chatMemberToTab(member);
	}

	async setChatStickerSet(
		options: TgAirBot.SetChatStickerSet,
	): Promise<true> {
		const params = SetChatStickerSetMapper.toTelegram(options);

		return this.send<true>("setChatStickerSet", params);
	}

	async deleteChatStickerSet(
		options: TgAirBot.DeleteChatStickerSet,
	): Promise<true> {
		const params = DeleteChatStickerSetMapper.toTelegram(options);

		return this.send<true>("deleteChatStickerSet", params);
	}

	async getForumTopicIconStickers(): Promise<TgAirBot.Sticker[]> {
		const stickers = await this.send<Telegram.Sticker[]>(
			"getForumTopicIconStickers",
			{},
		);

		return stickers.map(StickerMapper.toTAB);
	}

	async createForumTopic(
		options: TgAirBot.CreateForumTopic,
	): Promise<TgAirBot.ForumTopic> {
		const params = CreateForumTopicMapper.toTelegram(options);

		const topic = await this.send<Telegram.ForumTopic>(
			"createForumTopic",
			params,
		);

		return ForumMapper.forumTopicToTAB(topic);
	}

	async editForumTopic(options: TgAirBot.EditForumTopic): Promise<true> {
		const params = EditForumTopicMapper.toTelegram(options);

		return this.send<true>("editForumTopic", params);
	}

	async closeForumTopic(options: TgAirBot.CloseForumTopic): Promise<true> {
		const params = CloseForumTopicMapper.toTelegram(options);

		return this.send<true>("closeForumTopic", params);
	}

	async reopenForumTopic(options: TgAirBot.ReopenForumTopic): Promise<true> {
		const params = ReopenForumTopicMapper.toTelegram(options);

		return this.send<true>("reopenForumTopic", params);
	}

	async deleteForumTopic(options: TgAirBot.DeleteForumTopic): Promise<true> {
		const params = DeleteForumTopicMapper.toTelegram(options);

		return this.send<true>("deleteForumTopic", params);
	}

	async unpinAllForumTopicMessages(
		options: TgAirBot.UnpinAllForumTopicMessages,
	): Promise<true> {
		const params = UnpinAllForumTopicMessagesMapper.toTelegram(options);

		return this.send<true>("unpinAllForumTopicMessages", params);
	}

	async editGeneralForumTopic(
		options: TgAirBot.EditGeneralForumTopic,
	): Promise<true> {
		const params = EditGeneralForumTopicMapper.toTelegram(options);

		return this.send<true>("editGeneralForumTopic", params);
	}

	async closeGeneralForumTopic(
		options: TgAirBot.CloseGeneralForumTopic,
	): Promise<true> {
		const params = CloseGeneralForumTopicMapper.toTelegram(options);

		return this.send<true>("closeGeneralForumTopic", params);
	}

	async reopenGeneralForumTopic(
		options: TgAirBot.ReopenGeneralForumTopic,
	): Promise<true> {
		const params = ReopenGeneralForumTopicMapper.toTelegram(options);

		return this.send<true>("reopenGeneralForumTopic", params);
	}

	async hideGeneralForumTopic(
		options: TgAirBot.HideGeneralForumTopic,
	): Promise<true> {
		const params = HideGeneralForumTopicMapper.toTelegram(options);

		return this.send<true>("hideGeneralForumTopic", params);
	}

	async unhideGeneralForumTopic(
		options: TgAirBot.UnhideGeneralForumTopic,
	): Promise<true> {
		const params = UnhideGeneralForumTopicMapper.toTelegram(options);

		return this.send<true>("unhideGeneralForumTopic", params);
	}

	async unpinAllGeneralForumTopicMessages(
		options: TgAirBot.UnpinAllGeneralForumTopicMessages,
	): Promise<true> {
		const params =
			UnpinAllGeneralForumTopicMessagesMapper.toTelegram(options);

		return this.send<true>("unpinAllGeneralForumTopicMessages", params);
	}

	async answerCallbackQuery(
		options: TgAirBot.AnswerCallbackQuery,
	): Promise<true> {
		const params = AnswerCallbackQueryMapper.toTelegram(options);

		return this.send<true>("answerCallbackQuery", params);
	}

	async setMyCommands(options: TgAirBot.SetMyCommands): Promise<true> {
		const params = SetMyCommandsMapper.toTelegram(options);

		return this.send<true>("setMyCommands", params);
	}

	async deleteMyCommands(
		options: TgAirBot.DeleteMyCommands = {},
	): Promise<true> {
		const params = DeleteMyCommandsMapper.toTelegram(options);

		return this.send<true>("deleteMyCommands", params);
	}

	async getMyCommands(
		options: TgAirBot.GetMyCommands = {},
	): Promise<TgAirBot.BotCommand[]> {
		const params = GetMyCommandsMapper.toTelegram(options);

		const commands = await this.send<Telegram.BotCommand[]>(
			"getMyCommands",
			params,
		);

		return commands.map(BotCommandMapper.toTAB);
	}

	async setMyName(options: TgAirBot.SetMyName = {}): Promise<true> {
		const params = SetMyNameMapper.toTelegram(options);

		return this.send<true>("setMyName", params);
	}

	async getMyName(
		options: TgAirBot.GetMyName = {},
	): Promise<TgAirBot.BotName> {
		const params = GetMyNameMapper.toTelegram(options);

		const botName = await this.send<Telegram.BotName>("getMyName", params);

		return BotNameMapper.toTAB(botName);
	}

	async setMyDescription(
		options: TgAirBot.SetMyDescription = {},
	): Promise<true> {
		const params = SetMyDescriptionMapper.toTelegram(options);

		return this.send<true>("setMyDescription", params);
	}

	async getMyDescription(
		options: TgAirBot.GetMyDescription = {},
	): Promise<TgAirBot.BotDescription> {
		const params = GetMyDescriptionMapper.toTelegram(options);

		const description = await this.send<Telegram.BotDescription>(
			"getMyDescription",
			params,
		);

		return BotDescriptionMapper.toTAB(description);
	}

	async setMyShortDescription(
		options: TgAirBot.SetMyShortDescription = {},
	): Promise<true> {
		const params = SetMyShortDescriptionMapper.toTelegram(options);

		return this.send<true>("setMyShortDescription", params);
	}

	async getMyShortDescription(
		options: TgAirBot.GetMyShortDescription = {},
	): Promise<TgAirBot.BotShortDescription> {
		const params = GetMyShortDescriptionMapper.toTelegram(options);

		const shortDescription = await this.send<Telegram.BotShortDescription>(
			"getMyShortDescription",
			params,
		);

		return BotShortDescriptionMapper.toTAB(shortDescription);
	}

	async setChatMenuButton(
		options: TgAirBot.SetChatMenuButton = {},
	): Promise<true> {
		const params = SetChatMenuButtonMapper.toTelegram(options);

		return this.send<true>("setChatMenuButton", params);
	}

	async getChatMenuButton(
		options: TgAirBot.GetChatMenuButton = {},
	): Promise<TgAirBot.MenuButton> {
		const params = GetChatMenuButtonMapper.toTelegram(options);

		const menuButton = await this.send<Telegram.MenuButton>(
			"setChatMenuButton",
			params,
		);

		return MenuButtonMapper.toTAB(menuButton);
	}

	async setMyDefaultAdministratorRights(
		options: TgAirBot.SetMyDefaultAdministratorRights = {},
	): Promise<true> {
		const params =
			SetMyDefaultAdministratorRightsMapper.toTelegram(options);

		return this.send<true>("setMyDefaultAdministratorRights", params);
	}

	async getMyDefaultAdministratorRights(
		options: TgAirBot.GetMyDefaultAdministratorRights = {},
	): Promise<TgAirBot.ChatAdministratorRights> {
		const params =
			GetMyDefaultAdministratorRightsMapper.toTelegram(options);

		const rights = await this.send<Telegram.ChatAdministratorRights>(
			"getMyDefaultAdministratorRights",
			params,
		);

		return ChatMapper.chatAdministratorRightsToTAB(rights);
	}

	async editMessageText(
		options: TgAirBot.EditMessageText,
	): Promise<TgAirBot.Message | true> {
		const params = EditMessageTextMapper.toTelegram(options);

		const res = await this.send<Telegram.Message | true>(
			"editMessageText",
			params,
		);

		if (typeof res === "boolean") return res;

		return MessageMapper.toTAB(res);
	}

	async editMessageCaption(
		options: TgAirBot.EditMessageCaption,
	): Promise<TgAirBot.Message | true> {
		const params = EditMessageCaptionMapper.toTelegram(options);

		const res = await this.send<Telegram.Message | true>(
			"editMessageCaption",
			params,
		);

		if (typeof res === "boolean") return res;

		return MessageMapper.toTAB(res);
	}

	async editMessageMedia(
		options: TgAirBot.EditMessageMedia,
	): Promise<TgAirBot.Message | true> {
		const params = EditMessageMediaMapper.toTelegram(options);

		const method =
			"thumbnail" in params.media
				? typeof params.media.thumbnail === "string"
					? "send"
					: "sendForm"
				: "send";

		const res = await this[method]<Telegram.Message | true>(
			"editMessageMedia",
			params,
		);

		if (typeof res === "boolean") return res;

		return MessageMapper.toTAB(res);
	}

	async editMessageLiveLocation(
		options: TgAirBot.EditMessageLiveLocation,
	): Promise<TgAirBot.Message | true> {
		const params = EditMessageLiveLocationMapper.toTelegram(options);

		const res = await this.send<Telegram.Message | true>(
			"editMessageLiveLocation",
			params,
		);

		if (typeof res === "boolean") return res;

		return MessageMapper.toTAB(res);
	}

	async stopMessageLiveLocation(
		options: TgAirBot.StopMessageLiveLocation,
	): Promise<TgAirBot.Message | true> {
		const params = StopMessageLiveLocationMapper.toTelegram(options);

		const res = await this.send<Telegram.Message | true>(
			"stopMessageLiveLocation",
			params,
		);

		if (typeof res === "boolean") return res;

		return MessageMapper.toTAB(res);
	}

	async editMessageReplyMarkup(
		options: TgAirBot.EditMessageReplyMarkup,
	): Promise<TgAirBot.Message | true> {
		const params = EditMessageReplyMarkupMapper.toTelegram(options);

		const res = await this.send<Telegram.Message | true>(
			"editMessageReplyMarkup",
			params,
		);

		if (typeof res === "boolean") return res;

		return MessageMapper.toTAB(res);
	}

	async stopPoll(options: TgAirBot.StopPoll): Promise<TgAirBot.Message> {
		const params = StopPollMapper.toTelegram(options);

		const message = await this.send<Telegram.Message>("stopPoll", params);

		return MessageMapper.toTAB(message);
	}

	async deleteMessage(options: TgAirBot.DeleteMessage): Promise<true> {
		const params = DeleteMessageMapper.toTelegram(options);

		return this.send<true>("deleteMessage", params);
	}

	async sendSticker(
		options: TgAirBot.SendSticker,
	): Promise<TgAirBot.Message> {
		const params = SendStickerMapper.toTelegram(options);

		const methodName =
			typeof params.sticker === "string" ? "send" : "sendForm";

		const message = await this[methodName]<Telegram.Message>(
			"sendSticker",
			params,
		);

		return MessageMapper.toTAB(message);
	}

	async getStickerSet(
		options: TgAirBot.GetStickerSet,
	): Promise<TgAirBot.StickerSet> {
		const stickerSet = await this.send<Telegram.StickerSet>(
			"getStickerSet",
			GetStickerSetMapper.toTelegram(options),
		);

		return StickerMapper.stickerSetToTAB(stickerSet);
	}

	async getCustomEmojiStickers(
		options: TgAirBot.GetCustomEmojiStickers,
	): Promise<TgAirBot.Sticker[]> {
		const stickers = await this.send<Telegram.Sticker[]>(
			"getCustomEmojiStickers",
			GetCustomEmojiStickersMapper.toTelegram(options),
		);

		return stickers.map(StickerMapper.toTAB);
	}

	async uploadStickerFile(
		options: TgAirBot.UploadStickerFile,
	): Promise<TgAirBot.File> {
		const file = await this.send<Telegram.File>(
			"uploadStickerFile",
			UploadStickerFileMapper.toTelegram(options),
		);

		return FileMapper.toTAB(file);
	}

	async createNewSticker(options: TgAirBot.CreateNewSticker): Promise<true> {
		return this.send<true>(
			"createNewSticker",
			CreateNewStickerMapper.toTelegram(options),
		);
	}

	async addStickerToSet(options: TgAirBot.AddStickerToSet): Promise<true> {
		return this.send<true>(
			"addStickerToSet",
			AddStickerToSetMapper.toTelegram(options),
		);
	}

	async setStickerPositionInSet(
		options: TgAirBot.SetStickerPositionInSet,
	): Promise<true> {
		return this.send<true>(
			"setStickerPositionInSet",
			SetStickerPositionInSetMapper.toTelegram(options),
		);
	}

	async deleteStickerFromSet(
		options: TgAirBot.DeleteStickerFromSet,
	): Promise<true> {
		return this.send<true>(
			"deleteStickerFromSet",
			DeleteStickerFromSetMapper.toTelegram(options),
		);
	}

	async setStickerEmojiList(
		options: TgAirBot.SetStickerEmojiList,
	): Promise<true> {
		return this.send<true>(
			"setStickerEmojiList",
			SetStickerEmojiListMapper.toTelegram(options),
		);
	}

	async setStickerKeywords(
		options: TgAirBot.SetStickerKeywords,
	): Promise<true> {
		return this.send<true>(
			"setStickerKeywords",
			SetStickerKeywordsMapper.toTelegram(options),
		);
	}

	async setStickerMaskPosition(
		options: TgAirBot.SetStickerMaskPosition,
	): Promise<true> {
		return this.send<true>(
			"setStickerMaskPosition",
			SetStickerMaskPositionMapper.toTelegram(options),
		);
	}

	async setStickerSetTitle(
		options: TgAirBot.SetStickerSetTitle,
	): Promise<true> {
		return this.send<true>(
			"setStickerSetTitle",
			SetStickerSetTitleMapper.toTelegram(options),
		);
	}

	async setStickerSetThumbnail(
		options: TgAirBot.SetStickerSetThumbnail,
	): Promise<true> {
		const params = SetStickerSetThumbnailMapper.toTelegram(options);

		if (params.thumbnail && typeof params.thumbnail !== "string") {
			return this.sendForm<true>("setStickerSetThumbnail", params);
		} else {
			return this.send<true>("setStickerSetThumbnail", params);
		}
	}

	async setCustomEmojiStickerSetThumbnail(
		options: TgAirBot.SetCustomEmojiStickerSetThumbnail,
	): Promise<true> {
		return this.send<true>(
			"setCustomEmojiStickerSetThumbnail",
			SetCustomEmojiStickerSetThumbnailMapper.toTelegram(options),
		);
	}

	async deleteStickerSet(options: TgAirBot.DeleteStickerSet): Promise<true> {
		return this.send<true>(
			"deleteStickerSet",
			DeleteStickerSetMapper.toTelegram(options),
		);
	}

	async answerInlineQuery(
		options: TgAirBot.AnswerInlineQuery,
	): Promise<true> {
		return this.send<true>(
			"answerInlineQuery",
			AnswerInlineQueryMapper.toTelegram(options),
		);
	}

	async answerWebAppQuery(
		options: TgAirBot.AnswerWebAppQuery,
	): Promise<TgAirBot.SentWebAppMessage> {
		const message = await this.send<Telegram.SentWebAppMessage>(
			"answerWebAppQuery",
			AnswerWebAppQueryMapper.toTelegram(options),
		);

		return SentWebAppMessageMapper.toTAB(message);
	}

	async sendInvoice(
		options: TgAirBot.SendInvoice,
	): Promise<TgAirBot.Message> {
		const message = await this.send<Telegram.Message>(
			"sendInvoice",
			SendInvoiceMapper.toTelegram(options),
		);

		return MessageMapper.toTAB(message);
	}

	async createInvoiceLink(
		options: TgAirBot.CreateInvoiceLink,
	): Promise<string> {
		return this.send<string>(
			"createInvoiceLink",
			CreateInvoiceLinkMapper.toTelegram(options),
		);
	}

	async answerShippingQuery(
		options: TgAirBot.AnswerShippingQuery,
	): Promise<true> {
		return this.send<true>(
			"answerShippingQuery",
			AnswerShippingQueryMapper.toTelegram(options),
		);
	}

	async answerPreCheckoutQuery(
		options: TgAirBot.AnswerPreCheckoutQuery,
	): Promise<true> {
		return this.send<true>(
			"answerPreCheckoutQuery",
			AnswerPreCheckoutQueryMapper.toTelegram(options),
		);
	}

	async setPassportDataErrors(
		options: TgAirBot.SetPassportDataErrors,
	): Promise<true> {
		return this.send<true>(
			"setPassportDataErrors",
			SetPassportDataErrorsMapper.toTelegram(options),
		);
	}

	async sendGame(options: TgAirBot.SendGame): Promise<TgAirBot.Message> {
		const message = await this.send<Telegram.Message>(
			"sendGame",
			SendGameMapper.toTelegram(options),
		);

		return MessageMapper.toTAB(message);
	}

	async setGameScore(
		options: TgAirBot.SetGameScore,
	): Promise<TgAirBot.Message | true> {
		const res = await this.send<Telegram.Message | true>(
			"setGameScore",
			SetGameScoreMapper.toTelegram(options),
		);

		if (typeof res === "boolean") {
			return res;
		}

		return MessageMapper.toTAB(res);
	}

	async getGameHighScores(
		options: TgAirBot.GetGameHighScores,
	): Promise<TgAirBot.GameHighScore[]> {
		const scores = await this.send<Telegram.GameHighScore[]>(
			"getGameHighScores",
			GetGameHighScoresMapper.toTelegram(options),
		);

		return scores.map(GameMapper.gameHighScoreToTAB);
	}
}
