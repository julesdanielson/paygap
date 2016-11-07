var socket = io.connect() //connect to the server

socket.on('connect', function(data){ // when connected, do something
  console.log("connected to the server" + socket.id); // log out our id
})
