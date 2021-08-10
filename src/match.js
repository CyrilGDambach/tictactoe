import {player} from "./player.js";
const renderEl = document.querySelector('.js--container__player');
const renderEl2 = document.querySelector('.js--container__player--two');

export const match = {
    p1: '',
    p2: '',
    winner: '',
};
/*
let {p1, p2, winner} = match;
*/
export const setMatch = (newPlayer) => {

    if (match.p1 === ''){
        match.p1 = newPlayer;
        renderEl.classList.add('js--container__player');
        renderEl.innerHTML = `<p><h2>${newPlayer}</h2></p>`;
    }
    else{
        match.p2 = newPlayer;
        renderEl2.classList.add('js--container__player');
        renderEl2.innerHTML = `<p><h2>${newPlayer}</h2></p>`;
    }
    console.log(match);
}
export const getMatch = () => match;