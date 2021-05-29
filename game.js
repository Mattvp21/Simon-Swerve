var buttonColors = ["red", "blue", "green", "yellow", "orange", "purple"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;


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
            $('#level-title').text("game over");
            startOver();
        }
     
    }

    function nextSequence() {
        userClickedPattern = [];
        
            level++;
           $('#level-title').text('Level ' + level);
           
            var randomNumber = Math.floor(Math.random()*6);
            var randomChosenColor = buttonColors[randomNumber];
            gamePattern.push(randomChosenColor);
            $("#" + randomChosenColor).fadeIn(200).fadeOut(200).fadeIn(200);
            playSound(randomChosenColor);
            animatePressed(randomChosenColor);
            $('#level-title').text('Level ' + level);
            

            if(level === 4) {
                setTimeout( () => {
                 $(".orange").css({"transform": "translateY(-275px)"})
                 $(".yellow").css({"transform": "translateY(275px)"})
                $(".red").css({"transform": "translateX(-275px)"})
                $(".green").css({"transform": "translateX(275px)"})
                }, 200)
                
            } else if(level === 6) {
                setTimeout( () => {
                 $(".orange").css({"transform": "translateY(-275px)"})
                 $(".yellow").css({"transform": "translateY(275px)"})
                $(".red").css({"transform": "translateX(-275px)"})
                $(".green").css({"transform": "translateX(275px)"})
                }, 200)
                
            }
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

          
            