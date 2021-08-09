import render from "./view.js"
import {setTicker} from "./ticker.js";
import {getGame} from "./game.js";
import {initNewGame} from "./game.js";
import {renderForm, showForm} from "./formular.js";
import {renderRankHTML} from "./rangliste.js";
// import {gtPlayers} from "./player";

document.addEventListener('DOMContentLoaded', (event) => {
    console.log("test")

    console.log("test2");
    initNewGame();
    render(getGame());
    renderForm();
    renderRankHTML();
    document.querySelector('.js--button__replay').addEventListener('click', (e) => {
        initNewGame();
        render(getGame());
        setTicker('Player 1 startet');
    });
    document.querySelector('.js--button__add').addEventListener('click', (e) => {
        showForm();
        // renderForm();


    });
});
