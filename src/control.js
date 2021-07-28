import render from "./view.js"
import {setTicker} from "./ticker.js";
// import {getPlayers} from "./player";

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementsByClassName('js--form')[0].classList.add('form__hide');
    console.log("test");
    render(getGame());
    document.querySelector('.js--button__replay').addEventListener('click', (e) => {
        initNewGame();
        render(getGame());
        setTicker('Player 1 startet');
    });
    document.querySelector('.js--button__add').addEventListener('click', (e) => {
        document.getElementsByClassName('js--container')[0].classList.add('container__hide');
        document.getElementsByClassName('js--form')[0].classList.remove('form__hide');
        document.getElementsByClassName('js--rangliste')[0].classList.add('rangliste__hide');

    });
});
