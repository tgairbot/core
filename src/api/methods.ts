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
import { WrapRequest } from "../types/wrap-request";
import { Client } from "./client";

export class Methods {
	constructor(private readonly token: string) {
		console.log(token);
	}

	private async _send<T>(
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

	private async _sendForm<T>(
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

	async getMe(): Promise<TgAirBot.User> {
		return UserMapper.toTAB(await this._send<Telegram.User>("getMe"));
	}

	async logOut(): Promise<true> {
		return this._send<true>("logOut");
	}

	async close(): Promise<true> {
		return this._send<true>("close");
	}

	async sendMessage(
		options: TgAirBot.SendMessage,
	): Promise<TgAirBot.Message> {
		const params = SendMessageMapper.toTelegram(options);

		const message = await this._send<Telegram.Message>(
			"sendMessage",
			params,
		);

		return MessageMapper.toTAB(message);
	}

	async forwardMessage(
		options: TgAirBot.ForwardMessage,
	): Promise<TgAirBot.Message> {
		const params = ForwardMessageMapper.toTelegram(options);

		const message = await this._send<Telegram.Message>(
			"forwardMessage",
			params,
		);

		return MessageMapper.toTAB(message);
	}

	async copyMessage(
		options: TgAirBot.CopyMessage,
	): Promise<TgAirBot.MessageId> {
		const params = CopyMessageMapper.toTelegram(options);

		const messageId = await this._send<Telegram.MessageId>(
			"copyMessage",
			params,
		);

		return MessageMapper.messageIdToTAB(messageId);
	}

	async sendPhoto(options: TgAirBot.SendPhoto): Promise<TgAirBot.Message> {
		const params = SendPhotoMapper.toTelegram(options);

		if (typeof params.photo === "string") {
			const message = await this._send<Telegram.Message>(
				"sendPhoto",
				params,
			);

			return MessageMapper.toTAB(message);
		} else {
			const message = await this._sendForm<Telegram.Message>(
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
			const message = await this._sendForm<Telegram.Message>(
				"sendAudio",
				params,
			);

			return MessageMapper.toTAB(message);
		} else {
			const message = await this._send<Telegram.Message>(
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
			const message = await this._sendForm<Telegram.Message>(
				"sendDocument",
				params,
			);

			return MessageMapper.toTAB(message);
		} else {
			const message = await this._send<Telegram.Message>(
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
			const message = await this._sendForm<Telegram.Message>(
				"sendVideo",
				params,
			);

			return MessageMapper.toTAB(message);
		} else {
			const message = await this._send<Telegram.Message>(
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
			const message = await this._sendForm<Telegram.Message>(
				"sendAnimation",
				params,
			);

			return MessageMapper.toTAB(message);
		} else {
			const message = await this._send<Telegram.Message>(
				"sendAnimation",
				params,
			);

			return MessageMapper.toTAB(message);
		}
	}

	async sendVoice(options: TgAirBot.SendVoice): Promise<TgAirBot.Message> {
		const params = SendVoiceMapper.toTelegram(options);

		if (typeof params.voice !== "string") {
			const message = await this._sendForm<Telegram.Message>(
				"sendVoice",
				params,
			);

			return MessageMapper.toTAB(message);
		} else {
			const message = await this._send<Telegram.Message>(
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
			const message = await this._sendForm<Telegram.Message>(
				"sendVideoNote",
				params,
			);

			return MessageMapper.toTAB(message);
		} else {
			const message = await this._send<Telegram.Message>(
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
			const messages = await this._send<Telegram.Message[]>(
				"sendMediaGroup",
				params,
			);

			return messages.map(MessageMapper.toTAB);
		} else {
			const messages = await this._sendForm<Telegram.Message[]>(
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

		const message = await this._send<Telegram.Message>(
			"sendLocation",
			params,
		);

		return MessageMapper.toTAB(message);
	}

	async sendVenue(options: TgAirBot.SendVenue): Promise<TgAirBot.Message> {
		const params = SendVenueMapper.toTelegram(options);

		const message = await this._send<Telegram.Message>("sendVenue", params);

		return MessageMapper.toTAB(message);
	}

	async sendContact(
		options: TgAirBot.SendContact,
	): Promise<TgAirBot.Message> {
		const params = SendContactMapper.toTelegram(options);

		const message = await this._send<Telegram.Message>(
			"sendContact",
			params,
		);

		return MessageMapper.toTAB(message);
	}

	async sendPoll(options: TgAirBot.SendPoll): Promise<TgAirBot.Message> {
		const params = SendPollMapper.toTelegram(options);

		const message = await this._send<Telegram.Message>("sendPoll", params);

		return MessageMapper.toTAB(message);
	}

	async sendDice(options: TgAirBot.SendDice): Promise<TgAirBot.Message> {
		const params = SendDiceMapper.toTelegram(options);

		const message = await this._send<Telegram.Message>("sendDice", params);

		return MessageMapper.toTAB(message);
	}

	async sendChatAction(options: TgAirBot.SendChatAtion): Promise<true> {
		const params = SendChatActionMapper.toTelegram(options);

		return this._send<true>("sendChatAction", params);
	}

	async getUserProfilePhotos(
		options: TgAirBot.GetUserProfilePhotos,
	): Promise<TgAirBot.UserProfilePhotos> {
		const params = GetUserProfilePhotosMapper.toTelegram(options);

		const userProfilePhotos = await this._send<Telegram.UserProfilePhotos>(
			"getUserProfilePhotos",
			params,
		);

		return UserMapper.userProfilePhotosToTAB(userProfilePhotos);
	}

	async getFile(options: TgAirBot.GetFile): Promise<TgAirBot.File> {
		const params = GetFileMapper.toTelegram(options);

		const file = await this._send<Telegram.File>("getFile", params);

		return FileMapper.toTAB(file);
	}

	async banChatMember(options: TgAirBot.BanChatMember): Promise<true> {
		const params = BanChatMemberMapper.toTelegram(options);

		return this._send<true>("banChatMember", params);
	}

	async unbanChatMember(options: TgAirBot.UnbanChatMember): Promise<true> {
		const params = UnbanChatMemberMapper.toTelegram(options);

		return this._send<true>("unbanChatMember", params);
	}
}
