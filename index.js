const express = require('express');
const app = express();
// built in node module
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})

io.on('connection', (socket) => {
    console.log('a user has connected');
    socket.on("disconnect",()=>{
        console.log("user has disconnected");
    });
    socket.on('chat message',(msg)=>{
        console.log('the message is:', msg);
    })

})

server.listen(4000, () => {
    console.log('listening on port 4000');
});