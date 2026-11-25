const TelegramBot = require('node-telegram-bot-api');
const http = require('http');

const TOKEN = process.env.TOKEN;

if (!TOKEN) {
    throw new Error('Bot Token is missing!');
}

const bot = new TelegramBot(TOKEN, {
    polling: true
});

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const name = msg.from.first_name || 'Anime Lover';

    const welcomeMessage = `
Hi ${name} 👋

WELCOME ANIME LOVERS ❤️

Search and watch your anime!!!!!!!!

All ANIMES it's here 🔥
`;

    bot.sendMessage(chatId, welcomeMessage);
});

http.createServer((req, res) => {
    res.end('Anime Bot is Running!');
}).listen(process.env.PORT || 3000);

console.log('Anime Searcher Bot Started!');
