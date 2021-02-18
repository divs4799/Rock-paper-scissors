var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
let player;
let computer;
let selector = ["rock","paper","scissors"];
//Random selector
let select ;
let point=0;
// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
  };
  // When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
  };
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

$("#paper").click(play);
$("#scissors").click(play);
$("#rock").click(play);
$("#againbtn").click(playagain);

function play(){
  select = Math.floor(Math.random()*3);
  console.log("computer"+select);
  computer = selector[select];
 player = this.id;
 $("#buttons").addClass("hide").removeClass("show");
 $("#buttons2").addClass("show").removeClass("hide");
 $("#buttons2").css("visibility","visible");
$(".pointheader").removeClass("hide");
var playerbutton = player + "2";
 $(".btn1")[0].setAttribute("Id",playerbutton);
 var compbutton = computer +"2";
 $(".btn2")[0].setAttribute("Id",compbutton);

setTimeout(function(){
  
  
  $(".btn1").addClass("left");
  $(".btn2").addClass("right");
},1000);
setTimeout(function(){
  $("#buttons2").css("justify-content","center");
  $("#after").fadeIn();
},1500);

console.log("before "+point);

check(computer,player);
console.log("after ");
console.log(point);
$("#scr").text(point);
}

function playagain(){
  $("#after").fadeOut();

setTimeout(function(){
  $("#buttons2").css("justify-content","space-around");


  $("#buttons").removeClass("hide").addClass("show");
  $("#buttons2").css("visibility","hidden");
  $(".pointheader").addClass("hide");
  
  $(".btn1").removeClass("left");
  $(".btn2").removeClass("right");
},500);  
}




function check(comp, player,) {
  console.log("point for this round "+ point);
  console.log("This is check" + comp);
  console.log("This is check" + player);
  if (comp == player) {
    document.getElementById("result").innerHTML = "DRAW";
    
  } else if (player == "rock" && comp == "scissors") {
    document.getElementById("result").innerHTML = "YOU WIN";
    point=point+1;
  } else if (player == "rock" && comp == "paper") {
    document.getElementById("result").innerHTML = "YOU LOSE";
    point = point-1;
  } else if (player == "paper" && comp == "rock") {
    document.getElementById("result").innerHTML = "YOU WIN";
    point = point+1;
  }
  else if (player=="paper" && comp=="scissors"){
    document.getElementById("result").innerHTML = "YOU LOSE";
    point = point-1;
  }
  else if (player=="scissors" && comp=="rock"){
    document.getElementById("result").innerHTML = "YOU LOSE";
    point = point-1;
  }
  else if(player=="scissors"&& comp=="paper"){
    document.getElementById("result").innerHTML = "YOU WIN";
    point = point+1;
  }
}