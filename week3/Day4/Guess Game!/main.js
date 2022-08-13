"use strict!"
document.querySelector(".message").textContent = "Correct answer";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess)
    if (!guess) {
        displayMessage('no number!')

    } else if (guess === secretNumber) {
        displayMessage("Correct Number");
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = "lightgreen";
        if (score > highscore) {
            highscore = score
            document.querySelector('.highscore').textContent = highscore
        }

    } else if (guess !== secretNumber) {
        displayMessage(guess > secretNumber ? "too high" : "too low")

        score--
        document.querySelector('.score').textContent = score
    } else {
        displayMessage('you lost the game')
        document.querySelector('.score').textcontent = 0
    }

})
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1
    displayMessage('Start Guessing .. ')
    document.querySelector('.score').textContent = score
    document.querySelector(".number").textContent = "?"
    document.querySelector(".guess").value = "";
    document.querySelector('body').style.backgroundColor = "#222";
})
const buttonCheck=document.querySelector('.check')
buttonCheck.classList.remove(".Ahidden")
buttonCheck.classList.add(".hidden")
