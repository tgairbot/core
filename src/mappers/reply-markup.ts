import * as Telegram from "../types/telegram";
import * as TgAirBot from "../types/tgairbot";
import { RemoveUndefinedKeysFromObject } from "../utils/remove-undefined-keys-from-object";
import { ChatMapper } from "./chat";

export class ReplyMarkupMapper {
	static toTAB(
		markup: Telegram.InlineKeyboardMarkup,
	): TgAirBot.InlineKeyboardMarkup {
		const entity: TgAirBot.InlineKeyboardMarkup = {
			inlineKeyboard: markup.inline_keyboard.map(row =>
				row.map(ReplyMarkupMapper.inlineKeyboardButtonToTAB),
			),
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.InlineKeyboardMarkup>(
			entity,
		);
	}

	static toTelegram(
		options: TgAirBot.InlineKeyboardMarkup,
	): Telegram.InlineKeyboardMarkup {
		const entity: Telegram.InlineKeyboardMarkup = {
			inline_keyboard: options.inlineKeyboard.map(row =>
				row.map(ReplyMarkupMapper.inlineKeyboardButtonToTelegram),
			),
		};

		return RemoveUndefinedKeysFromObject<Telegram.InlineKeyboardMarkup>(
			entity,
		);
	}

	static inlineKeyboardButtonToTAB(
		button: Telegram.InlineKeyboardButton,
	): TgAirBot.InlineKeyboardButton {
		const entity: TgAirBot.InlineKeyboardButton = {
			text: button.text,
			url: button.url,
			webApp: button.web_app
				? ReplyMarkupMapper.webAppInfoToTAB(button.web_app)
				: undefined,
			callbackData: button.callback_data,
			switchInlineQuery: button.switch_inline_query,
			switchInlineQueryCurrentChat:
				button.switch_inline_query_current_chat,
			loginUrl: button.login_url
				? ReplyMarkupMapper.loginUrlToTAB(button.login_url)
				: undefined,
			callbackGame: button.callback_game
				? ReplyMarkupMapper.callbackGameToTAB(button.callback_game)
				: undefined,
			switchInlineQueryChosenChat: button.switch_inline_query_chosen_chat
				? ReplyMarkupMapper.switchInlineQueryChosenChatToTAB(
						button.switch_inline_query_chosen_chat,
				  )
				: undefined,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.InlineKeyboardButton>(
			entity,
		);
	}

	static inlineKeyboardButtonToTelegram(
		button: TgAirBot.InlineKeyboardButton,
	): Telegram.InlineKeyboardButton {
		const entity: Telegram.InlineKeyboardButton = {
			text: button.text,
			callback_data: button.callbackData,
			switch_inline_query_current_chat:
				button.switchInlineQueryCurrentChat,
			switch_inline_query: button.switchInlineQuery,
			url: button.url,
			switch_inline_query_chosen_chat: button.switchInlineQueryChosenChat
				? ReplyMarkupMapper.switchInlineQueryChosenChatToTelegram(
						button.switchInlineQueryChosenChat,
				  )
				: undefined,
			callback_game: button.callbackGame
				? ReplyMarkupMapper.callbackGameToTelegram(button.callbackGame)
				: undefined,
			web_app: button.webApp
				? ReplyMarkupMapper.webAppInfoToTelegram(button.webApp)
				: undefined,
			login_url: button.loginUrl
				? ReplyMarkupMapper.loginUrlToTelegram(button.loginUrl)
				: undefined,
		};

		return RemoveUndefinedKeysFromObject<Telegram.InlineKeyboardButton>(
			entity,
		);
	}

	static switchInlineQueryChosenChatToTelegram(
		query: TgAirBot.SwitchInlineQueryChosenChat,
	): Telegram.SwitchInlineQueryChosenChat {
		const entity: Telegram.SwitchInlineQueryChosenChat = {
			query: query.query,
			allow_channel_chats: query.allowChannelChats,
			allow_group_chats: query.allowGroupChats,
			allow_user_chats: query.allowUserChats,
			allow_bot_chats: query.allowBotChats,
		};

		return RemoveUndefinedKeysFromObject<Telegram.SwitchInlineQueryChosenChat>(
			entity,
		);
	}

	static switchInlineQueryChosenChatToTAB(
		query: Telegram.SwitchInlineQueryChosenChat,
	): TgAirBot.SwitchInlineQueryChosenChat {
		const entity: TgAirBot.SwitchInlineQueryChosenChat = {
			query: query.query,
			allowBotChats: query.allow_bot_chats,
			allowUserChats: query.allow_user_chats,
			allowGroupChats: query.allow_group_chats,
			allowChannelChats: query.allow_channel_chats,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.SwitchInlineQueryChosenChat>(
			entity,
		);
	}

	static callbackGameToTAB(
		callback: Telegram.CallbackGame,
	): TgAirBot.CallbackGame {
		const entity: TgAirBot.CallbackGame = {};

		return RemoveUndefinedKeysFromObject<TgAirBot.CallbackGame>(entity);
	}

	static callbackGameToTelegram(
		callback: TgAirBot.CallbackGame,
	): Telegram.CallbackGame {
		const entity: Telegram.CallbackGame = {};

		return RemoveUndefinedKeysFromObject<Telegram.CallbackGame>(entity);
	}

	static loginUrlToTelegram(url: TgAirBot.LoginUrl): Telegram.LoginUrl {
		const entity: Telegram.LoginUrl = {
			url: url.url,
			request_write_access: url.requestWriteAccess,
			forward_text: url.forwardText,
			bot_username: url.botUsername,
		};

		return RemoveUndefinedKeysFromObject<Telegram.LoginUrl>(entity);
	}

	static loginUrlToTAB(url: Telegram.LoginUrl): TgAirBot.LoginUrl {
		const entity: TgAirBot.LoginUrl = {
			url: url.url,
			botUsername: url.bot_username,
			forwardText: url.forward_text,
			requestWriteAccess: url.request_write_access,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.LoginUrl>(entity);
	}

	static webAppInfoToTelegram(
		webApp: TgAirBot.WebAppInfo,
	): Telegram.WebAppInfo {
		const entity: Telegram.WebAppInfo = {
			url: webApp.url,
		};

		return RemoveUndefinedKeysFromObject<Telegram.WebAppInfo>(entity);
	}

	static webAppInfoToTAB(webApp: Telegram.WebAppInfo): TgAirBot.WebAppInfo {
		const entity: TgAirBot.WebAppInfo = {
			url: webApp.url,
		};

		return RemoveUndefinedKeysFromObject<TgAirBot.WebAppInfo>(entity);
	}

	static keyboardButtonToTelegram(
		button: TgAirBot.KeyboardButton,
	): Telegram.KeyboardButton {
		const entity: Telegram.KeyboardButton = {
			web_app: button.webApp
				? ReplyMarkupMapper.webAppInfoToTelegram(button.webApp)
				: undefined,
			request_chat: button.requestChat
				? ReplyMarkupMapper.requestChatToTelegram(button.requestChat)
				: undefined,
			request_contact: button.requestContact,
			request_poll: button.requestPoll,
			request_user: button.requestUser
				? ReplyMarkupMapper.requestUserToTelegram(button.requestUser)
				: undefined,
			request_location: button.requestLocation,
		};

		return RemoveUndefinedKeysFromObject<Telegram.KeyboardButton>(entity);
	}

	static requestUserToTelegram(
		request: TgAirBot.KeyboardButtonRequestUser,
	): Telegram.KeyboardButtonRequestUser {
		const entity: Telegram.KeyboardButtonRequestUser = {
			request_id: request.requestId,
			user_is_bot: request.userIsBot,
			user_is_premium: request.userIsPremium,
		};

		return RemoveUndefinedKeysFromObject<Telegram.KeyboardButtonRequestUser>(
			entity,
		);
	}

	static requestChatToTelegram(
		request: TgAirBot.KeyboardButtonRequestChat,
	): Telegram.KeyboardButtonRequestChat {
		const entity: Telegram.KeyboardButtonRequestChat = {
			request_id: request.requestId,
			bot_is_member: request.botIsMember,
			chat_is_forum: request.chatIsForum,
			chat_is_channel: request.chatIsChannel,
			chat_is_created: request.chatIsCreated,
			chat_has_username: request.chatHasUsername,
			bot_administrator_rights: request.botAdministratorRights
				? ChatMapper.chatAdministratorRightsToTelegram(
						request.botAdministratorRights,
				  )
				: undefined,
			user_administrator_rights: request.userAdministratorRights
				? ChatMapper.chatAdministratorRightsToTelegram(
						request.userAdministratorRights,
				  )
				: undefined,
		};

		return RemoveUndefinedKeysFromObject<Telegram.KeyboardButtonRequestChat>(
			entity,
		);
	}

	static replyMarkupToTelegram(
		markup:
			| TgAirBot.InlineKeyboardMarkup
			| TgAirBot.ReplyKeyboardMarkup
			| TgAirBot.ReplyKeyboardRemove
			| TgAirBot.ForceReply,
	):
		| Telegram.InlineKeyboardMarkup
		| Telegram.ReplyKeyboardMarkup
		| Telegram.ReplyKeyboardRemove
		| Telegram.ForceReply {
		const markupTypes = markup as Partial<
			TgAirBot.InlineKeyboardMarkup &
				TgAirBot.ReplyKeyboardMarkup &
				TgAirBot.ReplyKeyboardRemove &
				TgAirBot.ForceReply
		>;

		const entity: Partial<
			Telegram.InlineKeyboardMarkup &
				Telegram.ReplyKeyboardMarkup &
				Telegram.ReplyKeyboardRemove &
				Telegram.ForceReply
		> = {
			inline_keyboard: markupTypes.inlineKeyboard
				? markupTypes.inlineKeyboard.map(row =>
						row.map(
							ReplyMarkupMapper.inlineKeyboardButtonToTelegram,
						),
				  )
				: undefined,
			selective: markupTypes.selective,
			force_reply: markupTypes.forceReply,
			is_persistent: markupTypes.isPersistent,
			remove_keyboard: markupTypes.removeKeyboard,
			resize_keyboard: markupTypes.resizeKeyboard,
			one_time_keyboard: markupTypes.oneTimeKeyboard,
			input_field_placeholder: markupTypes.inputFieldPlaceholder,
			keyboard: markupTypes.keyboard
				? markupTypes.keyboard.map(row =>
						row.map(ReplyMarkupMapper.keyboardButtonToTelegram),
				  )
				: undefined,
		};

		return RemoveUndefinedKeysFromObject(entity) as
			| Telegram.InlineKeyboardMarkup
			| Telegram.ReplyKeyboardMarkup
			| Telegram.ReplyKeyboardRemove
			| Telegram.ForceReply;
	}
}
