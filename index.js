// process.env.NTBA_FIX_319 = 1;
require("dotenv").config();
const axios = require("axios");
const token = process.env.TELEGRAM_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

const Telegram = require(token);

const bot = new Telegram("1272165718:AAE44Ak4EKkztXBxg1o541I-YimRxZiXlq8");

async function getQuote() {
  try {
    const response = await axios.get("https://type.fit/api/quotes");
    const quote =
      response.data[Math.floor(Math.random() * response.data.length)];
    return `${quote.text} \n\n -${quote.author}`;
  } catch (error) {
    console.error(error);
  }
}

async function sendMessage() {
  const message = await getQuote();
  bot.sendMessage(chatId, message);
}

sendMessage();
