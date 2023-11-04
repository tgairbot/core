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
const TOKEN = "YOUR_TOKEN";

const polling = new Polling(TOKEN, { log: true });
const methods = new Methods(TOKEN);

polling.start().then();

const onMessageCallback = async (data: TgAirBot.Message) => {
    filter(/\/start/, data, async command => {
        const message = await methods.sendMessage({
            replyToMessageId: data.messageId,
            chatId: data.chat.id,
            text: "One handler",
        });
    });
};

UpdateHandler.onMessage(onMessageCallback);
```

## Документация
Подробная документация доступна в [нашей вики](https://github.com/tgairbot/core/wiki).

## Лицензия
Эта библиотека лицензирована под MIT License - подробности см. в файле [LICENSE](https://github.com/tgairbot/core/blob/main/LICENSE).

