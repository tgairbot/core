import * as Telegram from "../types/telegram";
import * as TgAirBot from "../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../utils/remove-undefined-keys-from-object";
import { AnimationMapper } from "./animation";
import { AudioMapper } from "./audio";
import { ChatMapper } from "./chat";
import { ContactMapper } from "./contact";
import { DiceMapper } from "./dice";
import { DocumentMapper } from "./document";
import { ForumMapper } from "./forum";
import { GameMapper } from "./game";
import { LocationMapper } from "./location";
import { PassportMapper } from "./passport";
import { PaymentMapper } from "./payment";
import { PhotoMapper } from "./photo";
import { PollMapper } from "./poll";
import { ReplyMarkupMapper } from "./reply-markup";
import { StickerMapper } from "./sticker";
import { UserMapper } from "./user";
import { VenueMapper } from "./venue";
import { VideoMapper } from "./video";
import { VoiceMapper } from "./voice";

export class MessageMapper {
	static toTAB(message: Telegram.Message): TgAirBot.Message {
		const entity: TgAirBot.Message = {
			chat: ChatMapper.toTAB(message.chat),
			date: message.date,
			messageId: message.message_id,
			from: message.from ? UserMapper.toTAB(message.from) : undefined,
			text: message.text,
			photo: message.photo
				? message.photo.map(PhotoMapper.toTAB)
				: undefined,
			viaBot: message.via_bot
				? UserMapper.toTAB(message.via_bot)
				: undefined,
			caption: message.caption,
			supergroupChatCreated: message.supergroup_chat_created,
			editDate: message.edit_date,
			location: message.location
				? LocationMapper.toTAB(message.location)
				: undefined,
			senderChat: message.sender_chat
				? ChatMapper.toTAB(message.sender_chat)
				: undefined,
			forwardDate: message.forward_date,
			forwardFrom: message.forward_from
				? UserMapper.toTAB(message.forward_from)
				: undefined,
			mediaGroupId: message.media_group_id,
			newChatPhoto: message.new_chat_photo
				? message.new_chat_photo.map(PhotoMapper.toTAB)
				: undefined,
			newChatTitle: message.new_chat_title,
			pinnedMessage: message.pinned_message
				? MessageMapper.toTAB(message.pinned_message)
				: undefined,
			isTopicMessage: message.is_topic_message,
			leftChatMember: message.left_chat_member
				? UserMapper.toTAB(message.left_chat_member)
				: undefined,
			newChatMembers: message.new_chat_members
				? message.new_chat_members.map(UserMapper.toTAB)
				: undefined,
			replyToMessage: message.reply_to_message
				? MessageMapper.toTAB(message.reply_to_message)
				: undefined,
			authorSignature: message.author_signature,
			deleteChatPhoto: message.delete_chat_photo,
			forwardFromChat: message.forward_from_chat
				? ChatMapper.toTAB(message.forward_from_chat)
				: undefined,
			hasMediaSpoiler: message.has_media_spoiler,
			messageThreadId: message.message_thread_id,
			migrateToChatId: message.migrate_to_chat_id,
			connectedWebsite: message.connected_website,
			forwardSigrature: message.forward_sigrature,
			groupChatCreated: message.group_chat_created,
			forwardSenderName: message.forward_sender_name,
			migrateFromChatId: message.migrate_to_chat_id,
			channelChatCreated: message.channel_chat_created,
			isAutomaticForward: message.is_automatic_forward,
			hasProtectedContent: message.has_protected_content,
			forwardFromMessageId: message.forward_from_message_id,
			entities: message.entities
				? message.entities.map(MessageMapper.messageEntityToTAB)
				: undefined,
			captionEntities: message.caption_entities
				? message.caption_entities.map(MessageMapper.messageEntityToTAB)
				: undefined,
			dice: message.dice ? DiceMapper.toTAB(message.dice) : undefined,
			poll: message.poll ? PollMapper.toTAB(message.poll) : undefined,
			game: message.game ? GameMapper.toTAB(message.game) : undefined,
			animation: message.animation
				? AnimationMapper.toTAB(message.animation)
				: undefined,
			messageAutoDeleteTimerChanged:
				message.message_auto_delete_timer_changed
					? MessageMapper.messageAutoDeleteTimerChangedToTAB(
							message.message_auto_delete_timer_changed,
					  )
					: undefined,
			audio: message.audio ? AudioMapper.toTAB(message.audio) : undefined,
			venue: message.venue ? VenueMapper.toTAB(message.venue) : undefined,
			video: message.video ? VideoMapper.toTAB(message.video) : undefined,
			voice: message.voice ? VoiceMapper.toTAB(message.voice) : undefined,
			contact: message.contact
				? ContactMapper.toTAB(message.contact)
				: undefined,
			invoice: message.invoice
				? PaymentMapper.invoiceToTAB(message.invoice)
				: undefined,
			successfulPayment: message.successful_payment
				? PaymentMapper.successPaymentToTAB(message.successful_payment)
				: undefined,
			userShared: message.user_shared
				? UserMapper.userSharedToTAB(message.user_shared)
				: undefined,
			chatShared: message.chat_shared
				? ChatMapper.chatSharedToTAB(message.chat_shared)
				: undefined,
			sticker: message.sticker
				? StickerMapper.toTAB(message.sticker)
				: undefined,
			document: message.document
				? DocumentMapper.toTAB(message.document)
				: undefined,
			videoNote: message.video_note
				? VideoMapper.videoNoteToTAB(message.video_note)
				: undefined,
			forumTopicClosed: message.forum_topic_closed
				? ForumMapper.forumTopicClosedToTAB(message.forum_topic_closed)
				: undefined,
			forumTopicEdited: message.forum_topic_edited
				? ForumMapper.forumTopicEditedToTAB(message.forum_topic_edited)
				: undefined,
			forumTopicCreated: message.forum_topic_created
				? ForumMapper.forumTopicCreatedToTAB(
						message.forum_topic_created,
				  )
				: undefined,
			forumTopicReopened: message.forum_topic_reopened
				? ForumMapper.forumTopicReopenedToTAB(
						message.forum_topic_reopened,
				  )
				: undefined,
			generalForumTopicHidden: message.general_forum_topic_hidden
				? ForumMapper.generalForumTopicHiddenToTAB(
						message.general_forum_topic_hidden,
				  )
				: undefined,
			generalForumTopicUnhidden: message.general_forum_topic_unhidden
				? ForumMapper.generalForumTopicUnhiddenToTAB(
						message.general_forum_topic_unhidden,
				  )
				: undefined,
			videoChatStarted: message.video_chat_started
				? ChatMapper.videoChatStartedToTAB(message.video_chat_started)
				: undefined,
			videoChatEnded: message.video_chat_ended
				? ChatMapper.videoChatEndedToTAB(message.video_chat_ended)
				: undefined,
			videoChatScheduled: message.video_chat_scheduled
				? ChatMapper.videoChatScheduledToTAB(
						message.video_chat_scheduled,
				  )
				: undefined,
			videoChatParticipantsInvited:
				message.video_chat_participants_invited
					? ChatMapper.videoChatParticipantsInvitedToTAB(
							message.video_chat_participants_invited,
					  )
					: undefined,
			proximityAlertTriggered: message.proximity_alert_triggered
				? MessageMapper.proximityAlertTriggeredToTAB(
						message.proximity_alert_triggered,
				  )
				: undefined,
			writeAccessAllowed: message.write_access_allowed
				? MessageMapper.writeAccessAllowedToTAB(
						message.write_access_allowed,
				  )
				: undefined,
			webAppData: message.web_app_data
				? MessageMapper.webAppDataToTAB(message.web_app_data)
				: undefined,
			passportData: message.passport_data
				? PassportMapper.toTAB(message.passport_data)
				: undefined,
			replyMarkup: message.reply_markup
				? ReplyMarkupMapper.toTAB(message.reply_markup)
				: undefined,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.Message>(entity);
	}

	static messageEntityToTAB(
		messageEntity: Telegram.MessageEntity,
	): TgAirBot.MessageEntity {
		const entity: TgAirBot.MessageEntity = {
			type: messageEntity.type,
			url: messageEntity.url,
			user: messageEntity.user
				? UserMapper.toTAB(messageEntity.user)
				: undefined,
			length: messageEntity.length,
			offset: messageEntity.offset,
			language: messageEntity.language,
			customEmojiId: messageEntity.custom_emoji_id,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.MessageEntity>(entity);
	}

	static messageEntityToTelegram(
		messageEntity: TgAirBot.MessageEntity,
	): Telegram.MessageEntity {
		const entity: Telegram.MessageEntity = {
			url: messageEntity.url,
			type: messageEntity.type,
			length: messageEntity.length,
			language: messageEntity.language,
			custom_emoji_id: messageEntity.customEmojiId,
			offset: messageEntity.offset,
			user: messageEntity.user
				? UserMapper.toTelegram(messageEntity.user)
				: undefined,
		};

		return RemoveUndefinedKeysFromObject<Telegram.MessageEntity>(entity);
	}

	static messageAutoDeleteTimerChangedToTAB(
		data: Telegram.MessageAutoDeleteTimerChanged,
	): TgAirBot.MessageAutoDeleteTimerChanged {
		const entity: TgAirBot.MessageAutoDeleteTimerChanged = {
			messageAutoDeleteTime: data.message_auto_delete_time,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.MessageAutoDeleteTimerChanged>(
			entity,
		);
	}

	static writeAccessAllowedToTAB(
		access: Telegram.WriteAccessAllowed,
	): TgAirBot.WriteAccessAllowed {
		const entity: TgAirBot.WriteAccessAllowed = {
			webAppName: access.web_app_name,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.WriteAccessAllowed>(
			entity,
		);
	}

	static proximityAlertTriggeredToTAB(
		proximityAlertTriggered: Telegram.ProximityAlertTriggered,
	): TgAirBot.ProximityAlertTriggered {
		const entity: TgAirBot.ProximityAlertTriggered = {
			watcher: UserMapper.toTAB(proximityAlertTriggered.watcher),
			distance: proximityAlertTriggered.distance,
			traveler: UserMapper.toTAB(proximityAlertTriggered.traveler),
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.ProximityAlertTriggered>(
			entity,
		);
	}

	static webAppDataToTAB(data: Telegram.WebAppData): TgAirBot.WebAppData {
		const entity: TgAirBot.WebAppData = {
			data: data.data,
			buttonText: data.button_text,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.WebAppData>(entity);
	}

	static messageIdToTAB(messageId: Telegram.MessageId): TgAirBot.MessageId {
		const entity: TgAirBot.MessageId = {
			messageId: messageId.message_id,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.MessageId>(entity);
	}
}
