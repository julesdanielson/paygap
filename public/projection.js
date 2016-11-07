var socket = io.connect('http://150.253.91.90:3001') // set up a place for us to connect to. and try and connect

socket.on('connect', function(data){ // when we are connected do something
  console.log("connected to the server" + socket.id); // log out our sockets id, some long garbled number letter thing that is unique!
})

socket.on('projectionRectangle', function(data){ // if we see a projectionRectangle message then do some stuff

  console.log(data);

  if(data.buttons=="1,3"){
    $(".youare").html('You are a Female Designer...')
    $(".statement").html('if you were a man,<br> you would make<br> 28% more per year.')
    $(".footer").html('These estimates for designers, age 31-35, are based on a national sample of 2,106 men and 2,158 women. Our estimate of the average salaries is $53,338 ± $1,674 for men and $41,698 ± $1,280 for women at 90 percent confidence intervals. Based on these confidence intervals, the pay disparity between men and women is statistically significant.')
    $("body").css('background-color', 'rgb(101, 137, 153)');
}

  if(data.buttons=="1,4"){
    $(".youare").html('You are a Female Lawyer...')
    $(".statement").html('if you were a man,<br> you would make<br> 23% more per year.')
    $(".footer").html('These estimates for lawyers, and judges, magistrates, and other judicial workers, age 31-35, are based on a national sample of 3,426 men and 2,988 women. Our estimate of the average salaries is $125,025 ± $3,265 for men and $101,473 ± $3,132 for women at 90 percent confidence intervals. Based on these confidence intervals, the pay disparity between men and women is statistically significant.')
    $("body").css('background-color', 'rgb(101, 137, 153)');
}

  if(data.buttons=="1,5"){
    $(".youare").html('You are a Female Musician...')
    $(".statement").html('if you were a man,<br> you would make<br> 52% more per year.')
    $(".footer").html('These estimates for musicians, singers, and related workers, age 31-35, are based on a national sample of 303 men and 196 women. Our estimate of the average salaries is $36,181 ± $3,526 for men and $23,833 ± $4,332 for women at 90 percent confidence intervals. Based on these confidence intervals, the pay disparity between men and women is statistically significant.')
    $("body").css('background-color', 'rgb(101, 137, 153)');
}

  if(data.buttons=="1,6"){
    $(".youare").html('You are a Female Athlete...')
    $(".statement").html('if you were a man,<br> you would make<br> 162% more per year.')
    $(".footer").html('These estimates for athletes, coaches, umpires, and related workers, age 31-35, are based on a national sample of 701 men and 351 women. Our estimate of the average salaries is $65,601 ± $7,755 for men and $25,072 ± $2,820 for women at 90 percent confidence intervals. Based on these confidence intervals, the pay disparity between men and women is statistically significant.')
    $("body").css('background-color', 'rgb(101, 137, 153)');
}

  if(data.buttons=="1,7"){
    $(".youare").html('You are a Female Physician or Surgeon...')
    $(".statement").html('if you were a man,<br> you would make<br> 26% more per year.')
    $(".footer").html('These estimates for physicians and surgeons, age 31-35, are based on a national sample of 2,910 men and 2,518 women. Our estimate of the average salaries is $137,702 ± $3,738 for men and $109,693 ± $3,058 for women at 90 percent confidence intervals. Based on these confidence intervals, the pay disparity between men and women is statistically significant.')
    $("body").css('background-color', 'rgb(101, 137, 153)');
}

  if(data.buttons=="1,8"){
    $(".youare").html('You are a Female Financial Analyst...')
    $(".statement").html('if you were a man,<br> you would make<br> 63% more per year.')
    $(".footer").html('These estimates for financial analysts, age 31-35, are based on a national sample of 382 men and 222 women. Our estimate of the average salaries is $146,874 ± $14,802 for men and $89,906 ± $9,949 for women at 90 percent confidence intervals. Based on these confidence intervals, the pay disparity between men and women is statistically significant.')
    $("body").css('background-color', 'rgb(101, 137, 153)');
}

  if(data.buttons=="1,9"){
    $(".youare").html('You are a Female Aircraft Pilot...')
    $(".statement").html('if you were a man,<br> you would make<br> 26% more per year.')
    $(".footer").html('These estimates for aircraft pilots and flight engineers, age 31-35, are based on a national sample of 527 men and 40 women. Our estimate of the average salaries is $64,674 ± $2,941 for men and $51,346 ± $9,601 for women at 90 percent confidence intervals. Based on these confidence intervals, the pay disparity between men and women is statistically significant.')
    $("body").css('background-color', 'rgb(101, 137, 153)');
}

  if(data.buttons=="1,10"){
    $(".youare").html('You are a Female Nurse...')
    $(".statement").html('if you were a man,<br> you would make<br> 24% more per year.')
    $(".footer").html('These estimates for registered nurses, age 31-35, are based on a national sample of 1,555 men and 13,845 women. Our estimate of the average salaries is $66,812 ± $2,330 for men and $53,749 ± $476 for women at 90 percent confidence intervals. Based on these confidence intervals, the pay disparity between men and women is statistically significant.')
    $("body").css('background-color', 'rgb(101, 137, 153)');
}

  if(data.buttons=="1,11"){
    $(".youare").html('You are a Female Social Worker...')
    $(".statement").html('if you were a man,<br> you would make<br> 6% more per year.')
    $(".footer").html('These estimates for social workers, age 31-35, are based on a national sample of 1,122 men and 4,811 women. Our estimate of the average salaries is $40,788 ± $1,232 for men and $38,600 ± $506 for women at 90 percent confidence intervals. Based on these confidence intervals, the pay disparity between men and women is statistically significant.')
    $("body").css('background-color', 'rgb(101, 137, 153)');
}

  ////////

  if(data.buttons=="2,3"){
    $(".youare").html('You are a Male Designer...')
    $(".statement").html('if you were a woman,<br> you would make<br> 28% less per year.')
    $(".footer").html('These estimates for designers, age 31-35, are based on a national sample of 2,106 men and 2,158 women. Our estimate of the average salaries is $53,338 ± $1,674 for men and $41,698 ± $1,280 for women at 90 percent confidence intervals. Based on these confidence intervals, the pay disparity between men and women is statistically significant.')
    $("body").css('background-color', 'rgb(242, 103, 80)');
}

  if(data.buttons=="2,4"){
    $(".youare").html('You are a Male Lawyer...')
    $(".statement").html('if you were a woman,<br> you would make<br> 23% less per year.')
    $(".footer").html('These estimates for lawyers, and judges, magistrates, and other judicial workers, age 31-35, are based on a national sample of 3,426 men and 2,988 women. Our estimate of the average salaries is $125,025 ± $3,265 for men and $101,473 ± $3,132 for women at 90 percent confidence intervals. Based on these confidence intervals, the pay disparity between men and women is statistically significant.')
    $("body").css('background-color', 'rgb(242, 103, 80)');
}

  if(data.buttons=="2,5"){
    $(".youare").html('You are a Male Musican or Singer...')
    $(".statement").html('if you were a woman,<br> you would make<br> 52% less per year.')
    $(".footer").html('These estimates for musicians, singers, and related workers, age 31-35, are based on a national sample of 303 men and 196 women. Our estimate of the average salaries is $36,181 ± $3,526 for men and $23,833 ± $4,332 for women at 90 percent confidence intervals. Based on these confidence intervals, the pay disparity between men and women is statistically significant.')
    $("body").css('background-color', 'rgb(242, 103, 80)');
}

  if(data.buttons=="2,6"){
    $(".youare").html('You are a Male Athlete...')
    $(".statement").html('if you were a woman,<br> you would make<br> 162% less per year.')
    $(".footer").html('These estimates for athletes, coaches, umpires, and related workers, age 31-35, are based on a national sample of 701 men and 351 women. Our estimate of the average salaries is $65,601 ± $7,755 for men and $25,072 ± $2,820 for women at 90 percent confidence intervals. Based on these confidence intervals, the pay disparity between men and women is statistically significant.')
    $("body").css('background-color', 'rgb(242, 103, 80)');
}

  if(data.buttons=="2,7"){
    $(".youare").html('You are a Male Physician or Surgeon...')
    $(".statement").html('if you were a woman,<br> you would make<br> 26% less per year.')
    $(".footer").html('These estimates for physicians and surgeons, age 31-35, are based on a national sample of 2,910 men and 2,518 women. Our estimate of the average salaries is $137,702 ± $3,738 for men and $109,693 ± $3,058 for women at 90 percent confidence intervals. Based on these confidence intervals, the pay disparity between men and women is statistically significant.')
    $("body").css('background-color', 'rgb(242, 103, 80)');
}

  if(data.buttons=="2,8"){
    $(".youare").html('You are a Male Financial Analyst...')
    $(".statement").html('if you were a woman,<br> you would make<br> 63% less per year.')
    $(".footer").html('These estimates for financial analysts, age 31-35, are based on a national sample of 382 men and 222 women. Our estimate of the average salaries is $146,874 ± $14,802 for men and $89,906 ± $9,949 for women at 90 percent confidence intervals. Based on these confidence intervals, the pay disparity between men and women is statistically significant.')
    $("body").css('background-color', 'rgb(242, 103, 80)');
}

  if(data.buttons=="2,9"){
    $(".youare").html('You are a Male Aircraft Pilot...')
    $(".statement").html('if you were a woman,<br> you would make<br> 26% less per year.')
    $(".footer").html('These estimates for aircraft pilots and flight engineers, age 31-35, are based on a national sample of 527 men and 40 women. Our estimate of the average salaries is $64,674 ± $2,941 for men and $51,346 ± $9,601 for women at 90 percent confidence intervals. Based on these confidence intervals, the pay disparity between men and women is statistically significant.')
    $("body").css('background-color', 'rgb(242, 103, 80)');
}

  if(data.buttons=="2,10"){
    $(".youare").html('You are a Male Nurse...')
    $(".statement").html('if you were a woman,<br> you would make<br> 24% less per year.')
    $(".footer").html('These estimates for registered nurses, age 31-35, are based on a national sample of 1,555 men and 13,845 women. Our estimate of the average salaries is $66,812 ± $2,330 for men and $53,749 ± $476 for women at 90 percent confidence intervals. Based on these confidence intervals, the pay disparity between men and women is statistically significant.')
    $("body").css('background-color', 'rgb(242, 103, 80)');
}

  if(data.buttons=="2,11"){
    $(".youare").html('You are a Male Social Worker...')
    $(".statement").html('if you were a woman,<br> you would make<br> 6% less per year.')
    $(".footer").html('These estimates for social workers, age 31-35, are based on a national sample of 1,122 men and 4,811 women. Our estimate of the average salaries is $40,788 ± $1,232 for men and $38,600 ± $506 for women at 90 percent confidence intervals. Based on these confidence intervals, the pay disparity between men and women is statistically significant.')
    $("body").css('background-color', 'rgb(242, 103, 80)');
}

})
