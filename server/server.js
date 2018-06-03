const path = require('path');
const http = require('http');
var socketIO = require('socket.io');
var PORT = process.env.PORT || 3000;
const publicPath =path.join(__dirname, '../public');
var express =require('express');
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));
io.on('connection', function(socket){
          console.log('new user connected');
          socket.on('disconnect',function(){
            console.log('disconnected from client');
            
          }); 
          
});

server.listen(PORT,function(){
          console.log('express server started');
          
})

