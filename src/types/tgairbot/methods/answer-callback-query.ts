export interface AnswerCallbackQuery {
	callbackQueryId: string;
	text?: string;
	showAlert?: boolean;
	url?: string;
	cacheTime?: number;
}
