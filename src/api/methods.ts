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
import * as Telegram from "../types/telegram";
import * as TgAirBot from "../types/tgairbot";
import { RestrictChatMemberMapper } from "../mappers/methods/restrict-chat-member";
import { Client } from "./client";
import { WrapRequest } from "../types/wrap-request";
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
}
