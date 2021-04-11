const express = require('express')
const app = express();
const Websocket = require('ws')
const wss = new Websocket.Server({ port: 3000 });
wss.on('connection', function (ws) {
    ws.on('message', function(data) {
        console.log(data, '----收到信息')
        ws.send('我不爱你')
    })
})
