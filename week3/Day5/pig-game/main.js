"use strict"

const player0 = document.querySelector(".player--0")
const player1 = document.querySelector(".player--1")
const score0 = document.querySelector("#score--0")
const score1 = document.querySelector("#score--1")
const current0 = document.querySelector("#current--0")
const current1 = document.querySelector("#current--1")
const roll = document.querySelector(".btn--roll")
const Hold = document.querySelector(".btn--hold")
const btnsArr = document.querySelectorAll(".btn");
const dice = document.querySelector(".dice")
const newGame = document.querySelector(".btn--new")

let scoresArr, playing, currentScore, activePlayer;
newGame.addEventListener('click', resetGame)

function resetGame() {
    scoresArr = [0, 0]
    playing = true
    currentScore = 0
    activePlayer = 0
    player0.classList.add("player--active")
    player1.classList.remove("player--active")
    player0.classList.remove("player--winner")
    player1.classList.remove("player--winner")
    score0.textContent = 0
    score1.textContent = 0
    current0.textContent = 0
    current1.textContent = 0
}

roll.addEventListener('click', rollDice)

function rollDice() {
    if (playing) {
        const diceNumber = Math.ceil(Math.random() * 6)
        dice.classList.remove("hidden")
        dice.src = `./images/dice-${diceNumber}.png`;
        if (diceNumber !== 1) {
            currentScore += diceNumber
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore
        } else {
            switchplayer()
        }
    }

}

function switchplayer() {
    player0.classList.toggle("player--active")
    player1.classList.toggle("player--active")
    currentScore = 0
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore
    activePlayer = activePlayer === 0 ? 1 : 0;
}

Hold.addEventListener('click', hold)

function hold() {
    if (playing) {
        scoresArr[activePlayer] += currentScore
        document.querySelector(`#score--${activePlayer}`).textContent = scoresArr[activePlayer]
        if (scoresArr[activePlayer] >= 100) {
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner")
            playing = false
        } else {
            switchplayer()
        }
    }

}