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
        return "Boom - The result is a draw!"
    } else if (userGuess === "rock") {
        if (computerGuess === "scissors") {
            return "you win with rock!"
        } else {
            return "sorry - computer wins with paper"
        }
    } else if (userGuess === "scissors") {
        if (computerGuess === "paper") {
            return "you win with scissors!"
        } else {
            return "sorry - computer wins with rock"
        }
    } else if (userGuess === "paper") {
        if (computerGuess === "rock") {
            return "you win with paper"
        } else {
            return "sorry - computer wins with scissors"
        }
    }
}