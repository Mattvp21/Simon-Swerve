var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;
var gameOverDeaths = ['Five nails through the neck', 'Impaled', 'Gutted'];
var gameOverPattern = [];
$(document).keydown(function() { 
    if(!started) {
    $('#level-title').text('Level ' + level);
    nextSequence();
    started = true;     
    }
  });


$('.btn').click(function()    { 
    var userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);
    
    playSound(userChosenColour);
    animatePressed(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
 });

       function checkAnswer(currentLevel)  {
        if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
            console.log("success"); 
         if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }

        } else {
            var gameOverAudio = new Audio('sounds/wrong.mp3');
            gameOverAudio.play();
            $('body').addClass("game-over");
            setTimeout(function() {
                $('body').removeClass("game-over");
            }, 2000);
            $('#level-title').text( gameOverDeaths[Math.floor(Math.random()*gameOverDeaths.length)]);
            startOver();
        }
     
    }

    function nextSequence() {
        userClickedPattern = [];
        
            level++;
           $('#level-title').text('Level ' + level);
           
            var randomNumber = Math.floor(Math.random()*4);
            var randomChosenColor = buttonColors[randomNumber];
            gamePattern.push(randomChosenColor);
            $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
            playSound(randomChosenColor);
            animatePressed(randomChosenColor);
            $('#level-title').text('Level ' + level);
            checkAnswer();
        }; 
            
        function playSound(name)    {
        
            var audio = new Audio("sounds/" + name + ".mp3");
            audio.play();
            
            };

        function animatePressed(currentColour)  {

               $('#' + currentColour).addClass('pressed');
                
                setTimeout(function() {
                    $('#' + currentColour).removeClass("pressed");
                }, 100);
            
        
            }
    
           function startOver() {
                level = 0;
                gamePattern = [];
                started =false;
           }

          
            