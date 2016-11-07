var socket = io.connect() //connect to the server

socket.on('connect', function(data){ // when connected, do something
  console.log("connected to the server" + socket.id); // log out our id
})

var buttons;
var pbutton = 0;

$(".buttonmale, .buttonfemale").click(function(){
  $(".buttonmale, .buttonfemale").not(this).removeClass("selected");
  $(this).toggleClass("selected")

})


$(".buttonjob").click(function() {
  $(".buttonjob").not(this).removeClass("selected");
  $(this).toggleClass("selected")
  setTimeout(function(){
    $(".buttonmale, .buttonfemale, .buttonjob").removeClass("selected");

  }, 3000)
})

$(".buttonmale, .buttonfemale, .buttonjob").click(function() {


    buttons = pbutton + ',' + $(this).data("button") //set the current buttons to be the previous button and the current button

    console.log("B: " + buttons);

    pbutton = $(this).data("button") // make the current button the previous button for next time.



    if(buttons=="1,3"){
      console.log("Female Designer");
    }

    if(buttons=="1,4"){
      console.log("Female Lawyer");
    }

    if(buttons=="1,5"){
      console.log("Female Musican & Singer");
    }

    if(buttons=="1,6"){
      console.log("Female Athlete");
    }

    if(buttons=="1,7"){
      console.log("Female Physician & Surgeon");
    }

    if(buttons=="1,8"){
      console.log("Female Financial Analyst");
    }

    if(buttons=="1,9"){
      console.log("Female Aircraft Pilot");
    }

    if(buttons=="1,10"){
      console.log("Female Nurse");
    }

    if(buttons=="1,11"){
      console.log("Female Social Worker");
    }

    //////////

    if(buttons=="2,3"){
      console.log("Male Designer");
    }

    if(buttons=="2,4"){
      console.log("Male Lawyer");
    }

    if(buttons=="2,5"){
      console.log("Male Musican & Singer");
    }

    if(buttons=="2,6"){
      console.log("Male Athlete");
    }

    if(buttons=="2,7"){
      console.log("Male Physician & Surgeon");
    }

    if(buttons=="2,8"){
      console.log("Male Financial Analyst");
    }

    if(buttons=="2,9"){
      console.log("Male Aircraft Pilot");
    }

    if(buttons=="2,10"){
      console.log("Male Nurse");
    }

    if(buttons=="2,11"){
      console.log("Male Social Worker");
    }

    var dataToSend = {
      'buttons' : buttons
    }

    socket.emit ('addRectangle', dataToSend)

  })
