'use strict';
const squares = document.querySelectorAll('.grid button')
const result = document.querySelector('.result');
const displayCurrentPlayer = document.querySelector('#Current-player');
document.addEventListener('DOMContentLoaded', () => {
    let currentPlayer = 1;
    for (let i = 0; i < squares.length; i++) {
        squares[i].onclick = () => {
            console.log('u have clicked square' + i);
            // if (squares[i].classList.contains("taken")) {
            //     console.log("taken");
            // }
            if (squares[i].classList.contains('taken') && !squares[i].classList.contains('taken')) {
                if (currentPlayer == 1) {
                    // squares[i].classList.add('taken')
                    squares[i].classList.add('player-one')
                    currentPlayer = 2
                    displayCurrentPlayer.innerHTML = currentPlayer;

                } else if (currentPlayer == 2) {
                    squares[i].classList.add('player-one')
                    currentPlayer = 1
                    displayCurrentPlayer.innerHTML = currentPlayer;
                } else {
                    alert(`youu`)
                }
            }

        }
    }

})























































// let squares=document.querySelector('.lol')
// const fun = function () {
//   console.log('lol')
//   }
//   squares.addEventListener('click', fun)