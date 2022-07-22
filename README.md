# Telegram Bot API

The Bot API is an HTTP-based interface created for developers keen on building bots for Telegram. Read more about the bots at the introduction for developers [page](https://core.telegram.org/bots/api).

## Features

- 100% typesafe
- ES6 (Package not compatible with **CommonJS**)

### This package has no framework abstraction it is just raw api mapping to typescript/javascript.

If you want some framework abstraction on top (in most cases you do) consider using like [grammyjs](https://github.com/grammyjs/grammY)

## Examples

```js
import { Bot } from '@dauletbaev/telegram-bot';

const BOT_TOKEN = '1111111111:AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';

const bot = new Bot(BOT_TOKEN);

bot.startPolling({
  fn: async (update) => {
    const chatId = update?.message.chat.id;
    const text = update?.message.text;

    await bot.sendMessage({
      chat_id: chatId,
      text: text,
    });
  },
});
```
