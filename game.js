var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;


$(document).keypress(function() { 
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
            $('#level-title').text("game over");
            startOver();
        }
     
    }

    function nextSequence() {
        userClickedPattern = [];
        
            level++;
           $('#level-title').text('Level ' + level);
           
            var randomNumber = Math.floor(Math.random()* buttonColors.length);
            var randomChosenColor = buttonColors[randomNumber];
            gamePattern.push(randomChosenColor);
            $("#" + randomChosenColor).fadeIn(200).fadeOut(200).fadeIn(200);
            playSound(randomChosenColor);
            animatePressed(randomChosenColor);
            $('#level-title').text('Level ' + level);

            if(level === 4) {
                buttonColors.push("orange");
                document.getElementsByClassName("orange")[0].style.visibility = "visible"
                buttonColors.push("purple");
                document.getElementsByClassName("purple")[0].style.visibility = "visible"
           
            }

            gfsv 
            console.log(userClickedPattern)
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
                buttonColors = ["red", "blue", "green", "yellow"];
                document.getElementsByClassName("purple")[0].style.visibility = "hidden"
                document.getElementsByClassName("orange")[0].style.visibility = "hidden"
                
           }

          
            
