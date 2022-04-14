var buttonColours = ["red","blue","green","yellow"];
var gamePattern=[];
var playerClick =[];

// const buttons = $(".btn");

// for (var i = 0 ;  i<buttons.length; i++ ){

//   $("#"+buttons[i].id).click(function (e) {
//     const button = e.currentTarget.id;
//     var audio = new Audio ("/sounds/"+button+".mp3");
//     audio.play();
//     playerClick.push(button)
//     buttonAnimation("#"+button)
//     check();

//   })
  
//}
function nextSequnce() {
    var randomNumber = Math.floor(Math.random()*4);
    
 
  var randomChosenColour = buttonColours[randomNumber];


  gamePattern.push(randomChosenColour);
  buttonAnimation("#"+randomChosenColour);
  console.log(gamePattern);
}


function check() {
  // I want to check each element inside gamepatthen === playClick 

  // After check element  

  
  

}
// document.querySelectorAll(".button").addEventListener("click",function () {
// // document.getElementsByClassName()
// console.log("hi");
// });
function buttonAnimation(id) {
  $(id).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

 nextSequnce();