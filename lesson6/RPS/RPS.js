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
        return "The result is a tie!"
    } else if (userGuess === "rock") {
        if (computerGuess === "scissors") {
            return "you win with rock!"
        } else {
            return "paper wins"
        }
    } else if (userGuess === "scissors") {
        if (computerGuess === "paper") {
            return "you win with scissors!"
        } else {
            return "you lose - rock wins"
        }
    } else if (userGuess === "paper") {
        if (computerGuess === "rock") {
            return "you win with paper"
        } else {
            return "you lose - scissors win"
        }
    }
}