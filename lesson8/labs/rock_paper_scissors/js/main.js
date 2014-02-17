$(document).ready(function() {
    
    var computerScore = 0;
    var humanScore = 0;

    $("button").on("click", function(event) {
        event.preventDefault();
        var guessID = $(this).attr('id');
        if(computerScore == 5 || humanScore == 5){
            resetScore();
            resetWinText();
        }
        userGuess(guessID);
    });

    
    var userGuess = function(guess) {
            console.log("You have selected: " + guess + "<br>");
            setTimeout(function() {
                var computerGuess = convert(Math.floor(Math.random() * 3));
                console.log("The computer chooses: " + computerGuess + "<br>");
                console.log(compare(guess.toLowerCase(), computerGuess.toLowerCase()))
                console.log(humanScore, computerScore);
                updateScore();
            }, 1000)
        };

    function convert(number) {
        if (number === 0) {
            return "rock";
        } else if (number === 1) {
            return "scissors";
        } else {
            return "paper";
        }
    }

    function compare(userGuess, computerGuess) {
        if (userGuess === computerGuess) {
            return "Boom - The result is a draw!";
        } else if (userGuess === "rock") {
            if (computerGuess === "scissors") {
                humanScore += 1;
                return "You win with Rock!";
            } else {
                computerScore += 1;
                return "Sorry - computer wins with Paper";
            }
        } else if (userGuess === "scissors") {
            if (computerGuess === "paper") {
                humanScore += 1;
                return "You win with Scissors!";
            } else {
                computerScore += 1;
                return "Sorry - computer wins with Rock";
            }
        } else if (userGuess === "paper") {
            if (computerGuess === "rock") {
                humanScore += 1;
                return "You win with Paper";
            } else {
                computerScore += 1;
                return "Sorry - computer wins with Scissors";
            }
        }
    }

    function resetScore(){

        humanScore = 0;
        computerScore = 0;

        $("#humanScore").text(humanScore.toString());
        $("#computerScore").text(computerScore.toString());
    }

    function updateScore(){

        $("#humanScore").text(humanScore.toString());
        $("#computerScore").text(computerScore.toString());
    }

    function resetWinText(){
        //To Reset Styles or Winning/Losing Text before next round.
    }

}); //document get ready end statement