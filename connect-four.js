
window.addEventListener('DOMContentLoaded', e => {
    let game;
    const newGameBtn = document.querySelector('button')
    const player1 = document.getElementById('player-1-name');
    const player2 = document.getElementById('player-2-name');
    const formHolder = document.getElementById('form-holder');
    formHolder.addEventListener('keyup', e => {
        if (player1.value && player2.value) {
            newGameBtn.removeAttribute('disabled')
        } else {
            newGameBtn.setAttribute('disabled', null)
        }
    })
})

class Game {
    constructor() {

    }


}