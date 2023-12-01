# TgAirBot
TgAirBot is a lightweight library for easy interaction with the [Telegram Bot API](https://core.telegram.org/bots/api).

## Installation
You can install TgAirBot using npm:
```bash
npm install @tgairbot/core
```
## Usage

A simple example of using the library:
```typescript
import { useFilter, Polling, Methods, UpdateHandler, HandlerCallback } from "@tgairbot/core";

const TOKEN = "YOUR_TOKEN";

const polling = new Polling(TOKEN, { log: true });
const methods = new Methods(TOKEN);

polling.start().then();

const onMessageCallback: HandlerCallback<"message"> = async ({ params, wrapper }) => {
    useFilter(
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

## Documentation
Detailed documentation is available in [our wiki](https://github.com/tgairbot/core/wiki).

## Chat Telegram
[Link to chat](https://t.me/tgairbot)

## License
This library is licensed under the MIT License - see the [LICENSE](https://github.com/tgairbot/core/blob/main/LICENSE) file for details.

