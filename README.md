# TgAirBot

TgAirBot - это легковесная библиотека для простого взаимодействия с [Telegram Bot API](https://core.telegram.org/bots/api).

## Установка

Вы можете установить TgAirBot с помощью npm:

```bash
npm install @tgairbot/core
```
## Использование

Простой пример использования библиотеки:
```typescript
import { filter, Polling, Methods, UpdateHandler } from "@tgairbot/core";

const TOKEN = "YOUR_TOKEN";

const polling = new Polling(TOKEN, { log: true });
const methods = new Methods(TOKEN);

polling.start().then();

const onMessageCallback: HandlerCallback<"message"> = async ({ params, wrapper }) => {
    filter(
        async () => params.text === "/start",
        params,
        async (res) => {
            await methods.sendMessage({
                replyToMessageId: params.messageId,
                chatId: params.chat.id,
                text: "Hello world!!!",
            });
        },
    );
};

UpdateHandler.onMessage(onMessageCallback);
```

## Документация
Подробная документация доступна в [нашей вики](https://github.com/tgairbot/core/wiki).

## Лицензия
Эта библиотека лицензирована под MIT License - подробности см. в файле [LICENSE](https://github.com/tgairbot/core/blob/main/LICENSE).

