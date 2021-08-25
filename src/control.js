import render from "./view.js"
import {setTicker} from "./ticker.js";
import {getGame} from "./game.js";
import {initNewGame} from "./game.js";
import {renderForm, showForm} from "./form.js";
import {renderRankHTML} from "./ranking.js";
import {MATCH_WINNER_ID, matchStart, setMatchResult} from "./match.js";

document.addEventListener('DOMContentLoaded', (/* event */) => {
    initNewGame();
    render(getGame());
    renderForm();
    renderRankHTML();
    //TODO: Buttons disable as long as there arent two players
    document.querySelector('.js--button__replay').addEventListener('click', (e) => {
        initNewGame();
        matchStart();
        setMatchResult(MATCH_WINNER_ID.OPEN);
        setTicker('Player 1 startet');
    });
    document.querySelector('.js--button__add').addEventListener('click', (e) => {
        showForm();
        console.log('showform');
    });
});
