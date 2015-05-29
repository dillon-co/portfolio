

$(function(){
  $('.roll_button').click(function () {
    $('.square_box').addClass('spin-effect');
    setTimeout(function(){ 
      $('.square_box').removeClass('spin-effect');
      var x = Math.floor((Math.random() * 6) + 1);
      var y = Math.floor((Math.random() * 6) + 1);
      document.getElementById("dice1").innerHTML = "."+x+".";
      document.getElementById("dice2").innerHTML = "."+y+".";
      var added_num = x + y;
      document.getElementById("answer").innerHTML = "You rolled "+added_num+"!" 
    }, 2000);
  });
});  
