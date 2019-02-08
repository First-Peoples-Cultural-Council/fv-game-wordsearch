import Wordsearch from './scripts/game';

document.addEventListener("DOMContentLoaded", function(event) {
    const gameContainer = document.getElementById('game');
    
    Wordsearch.init(gameContainer,{});
});