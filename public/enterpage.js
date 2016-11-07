var socket = io.connect('http://150.253.91.90:3001') //connect to the server

socket.on('connect', function(data){ // when connected, do something
  console.log("connected to the server" + socket.id); // log out our id
})
