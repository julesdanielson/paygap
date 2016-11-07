var express = require('express') // hey we want to use express, our web host / routing system
var app = express(); // starts express running
var server = require('http').Server( app ) // start a server instance on a port
var io = require('socket.io')(server) // use socket.io for real time connections a.k.a websockets

var port = process.env.PORT || 8000

server.listen(port, function(){
  console.log("App is running on port" + port);
}) //server, set up a server on port 3001, do a call back when it srated successfully

app.use( express.static('public') ) //server out everything that is in the public folder

var storedPositions = []; //array of all stored postion element


io.on('connection', function(socket){ // if socket.io sees a new connection, do something with them...
  console.log(socket.id) // this prints out the socket that connected (ie: all users + the projection)

  io.emit('storedPositionsMessage', storedPositions);

  // socket.on('addRectangle', function(data){ // look for any messages with the 'addRectangle'
  //   console.log("addRectangle" + data); // log out the 'data' in this case you get true, but you could use this to get any arbitray data you want, think postion, color, ect.
  //   io.emit('projectionRectangle', data); // this sends out a message to the porjection to add a rectangle to the screen
  socket.on('addRectangle', function(buttons){ // look for any messages with the 'addRectangle'
    console.log("addRectangle" + buttons); // log out the 'data' in this case you get true, but you could use this to get any arbitray data you want, think postion, color, ect.
    io.emit('projectionRectangle', buttons); // this sends out a message to the porjection to add a rectangle to the screen

    storedPositions.push(buttons);

  })

})
