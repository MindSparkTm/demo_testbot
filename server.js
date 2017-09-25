var TelegramBot = require('node-telegram-bot-api');
var request = require('request');
var http = require('http');
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


const TOKEN = process.env.TELEGRAM_TOKEN || '451763772:AAHrM1HO_3VrYmjwNyBlaXvxgfkoJGU693c';
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello, world! [helloworld sample;');
}).listen(3009);


telegram = new TelegramBot(TOKEN, { polling: true });

telegram.on("text",function (message,req,res) {
    var messagetext = message.text;
    var receiver = message.chat.id; //the user receiving the response from the bot
    var timestamp = message.date; //timestamp
    var msgid = message.message_id;//message id
    var sender = message.from.id; //id of the telegram bot
    console.log("message", sender);


});