// const token = "1859926816:AAEGaCiAwhcoYaMdpOssZFocNtapO5t2sHo" // 换成你的Token
const { TG_ROBOT_TOKEN: token } = require('../config')
const TelegramBot = require('node-telegram-bot-api');
const BOT = new TelegramBot(token, { polling: true });
module.exports = BOT;