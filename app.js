let randomNumber = Math.floor(Math.random() * 100 + 1);

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHigh");

const guessArea = document.querySelector("#guessArea");
const guessCheck = document.querySelector("#guessCheck");

let counter = 1;
let resetButton;

function checkGuess() {
    let playerGuess = Number(guessArea.value);

    if (counter === 1) {
        guesses.innerHTML = "Previous guesses: ";
    }
    guesses.innerHTML += playerGuess + " / " ;

    if (playerGuess === randomNumber) {
        lastResult.innerHTML = "Congratulations!";
        lastResult.style.backgroundColor = "green";
        lastResult.style.fontSize = "20px";
        lowOrHigh.innerHTML = "";
        setGameOver();
    } else if (counter === 10) {
        lastResult.innerHTML = "!!!GAME OVER!!!";
        setGameOver();
    } else {
        lastResult.innerHTML = "Wrong!";
        lastResult.style.backgroundColor = "red";
        lastResult.style.fontSize = "20px";
        if (playerGuess < randomNumber) {
            lowOrHigh.innerHTML = "Your guess is too<sub> LOW</sub>!!!";
            lowOrHigh.style.fontSize = "20px";
        } else if (playerGuess > randomNumber) {
            lowOrHigh.innerHTML = "Your guess is too<sup> HIGH</sup>!!!";
            lowOrHigh.style.fontSize = "20px";
        }
    }

    counter++;
    guessArea.value = "";
    guessArea.focus();

}

function setGameOver() {
    guessArea.disabled = true;
    guessCheck.disabled = true;
    resetButton = document.createElement("button");
    resetButton.innerHTML = "Start New Game";
    resetButton.style.padding = "0.5% 3%";
    resetButton.style.backgroundColor = "#C61881";
    resetButton.style.cursor = "pointer";
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    counter = 1;
    const reset = document.querySelectorAll(".result p");
    for (let i = 0; i < reset.length; i++) {
        reset[i].innerHTML = "";        
    }

    resetButton.parentNode.removeChild(resetButton);

    guessArea.disabled = false;
    guessCheck.disabled = false;
    guessArea.value = "";
    guessArea.focus();

    lastResult.style.backgroundColor = "white";

    randomNumber = Math.floor(Math.random() * 100 + 1);
}




