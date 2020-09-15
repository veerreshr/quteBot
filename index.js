require("dotenv").config();
const axios = require("axios");
const Telegram = require("node-telegram-bot-api");

const bot = new Telegram(process.env.TELEGRAM_TOKEN);

async function getQuote() {
  try {
    const response = await axios.get("https://type.fit/api/quotes");
    const quote = response[Math.floor(Math.random() * response.length)];
    // return `${quote.text} \n ${quote.author}`;
    console.log(quote);
  } catch (error) {
    console.error(error);
  }
}

async function sendMessage() {
  try {
    const message = await getQuote();
    // bot.sendMessage(process.env.TELEGRAM_CHAT_ID, message);
  } catch (error) {
    console.error(error);
  }
}

sendMessage();
