     var userGuess = prompt("Rock/Paper/Scissors?");

            document.write("You have selected: " + userGuess + "<br>");

            setTimeout(function(){

                var computerGuess = convert(Math.floor(Math.random()*3));

                document.write("The computer chooses: " + computerGuess + "<br>");

                document.write(compare(userGuess.toLowerCase(),computerGuess.toLowerCase
                },1000);

function convert(number) {
    if (number === 0) {
        return "Rock";
    } else if (number === 1) {
        return "Scissors";
    } else {
        return "Paper";
    }
}

function compare(userGuess, computerGuess) {
    if (userGuess === computerGuess) {
        return "Boom - The result is a draw!";
    } else if (userGuess === "rock") {
        if (computerGuess === "scissors") {
            return "You win with Rock!";
        } else {
            return "Sorry - computer wins with Paper";
        }
    } else if (userGuess === "scissors") {
        if (computerGuess === "paper") {
            return "You win with Scissors!";
        } else {
            return "Sorry - computer wins with Rock";
        }
    } else if (userGuess === "paper") {
        if (computerGuess === "rock") {
            return "You win with Paper";
        } else {
            return "Sorry - computer wins with Scissors";
        }
    }
}