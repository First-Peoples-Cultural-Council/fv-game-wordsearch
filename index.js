import Wordsearch from './scripts/game';

document.addEventListener("DOMContentLoaded", function(event) {
    const gameContainer = document.getElementById('game');
    const game = new Wordsearch(gameContainer,{});
});