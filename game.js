
var buttonColours = ["red","blue","green","yellow"];
var gamePattern =[];
var userClickedPattern= [];
var level = 0;
let start = false;
let index = 0;
function nextSequence() {
    level++;
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
   playSound(randomChosenColour);
   PageHeader("Level "+ level);
  }


$(".btn").click(function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
   playSound(userChosenColour);
   animatePress(userChosenColour);
   checkAnswer();

})
function playSound (a){
  
  const audio = new Audio("sounds/" + a + ".mp3");
  audio.play();
}
function animatePress(color){ 
  $("."+ color).addClass("pressed");
  setTimeout(function () {
    $("."+ color).removeClass("pressed");
  },100);

}

$(document).keydown(function(){
if (!start){
  
  nextSequence();
  start= true;
}
});
function NextLevel() {
  index = 0;
  userClickedPattern = [];
  nextSequence();
}
function LoseGameReset(){
  start = false;
  gamePattern = [];
  userClickedPattern = [];
  index = 0;
  level = 0;
  PageHeader("Game Over, Press Any Key to Restart");
  playSound("wrong");
  $("body").addClass("game-over");
  setTimeout(function () { $("body").removeClass("game-over");
    
  },1000);
}
function PageHeader(value){
  $("#level-title").text(value);
}
function checkAnswer() {
  if(gamePattern[index] === userClickedPattern[index]){
    
    if(gamePattern.length === userClickedPattern.length){
      
      NextLevel();
    }else if (gamePattern.length !== userClickedPattern.length){
      index++;
    }
    
  }else{
    LoseGameReset();
  }
console.log(index);
}

