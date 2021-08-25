import {setDraw, setLoss, setWin} from "./player.js";
import render from "./view.js";
import {getGame} from "./game.js";

const renderEl = document.querySelector('.js--container__player');
const renderEl2 = document.querySelector('.js--container__player--two');
export const MATCH_WINNER_ID = {
    OPEN: -1,
    DRAW: 0,
    P1: 1,
    P2: 2
}
export const match = {
    p1: '',
    p2: '',
    result: MATCH_WINNER_ID.OPEN
};
const {OPEN, DRAW, P1, P2} = MATCH_WINNER_ID;
export const archiveMatch = () => {
    const storedGame = getMatchArchive();
    if (storedGame !== null) {
        sessionStorage.setItem('matchArchive', JSON.stringify(storedGame.concat([match])));
    } else {
        sessionStorage.setItem('matchArchive', JSON.stringify([match]));
    }
}
const getMatchArchive = () => JSON.parse(sessionStorage.getItem('matchArchive'));

export const setMatchResult = (matchWinnerId) => {
    match.result = matchWinnerId;
    if (match.result === MATCH_WINNER_ID.P1) {
        setWin(match.p1);
        setLoss(match.p2);
        console.log('match player 1 gewonnen meew');

    } else if (match.result === MATCH_WINNER_ID.P2) {
        setLoss(match.p1);
        setWin(match.p2);
        console.log('match player 2 gewonnen meew');

    } else if (match.result === MATCH_WINNER_ID.DRAW) {
        setDraw(match.p1,match.p2);
    }
    console.log(match);
}

export const matchOver = (matchWinnerId) => {
    setMatchResult(matchWinnerId);
    archiveMatch();
}
export const matchStart = () => {

    console.log('i wanna know this match');
    console.log(match);
    if (match.p2){
        enableButtons();
    }
}
const enableButtons = () => {
    const game = getGame();
    game.disabled = false;
    render(game);
}
export const setMatchPlayer = (newPlayer) => {

    if (match.p1 === '') {
        match.p1 = newPlayer;
        renderEl.classList.add('js--container__player');
        renderEl.innerHTML = `<p><h2>${newPlayer}</h2></p>`;
    } else {
        match.p2 = newPlayer;
        renderEl2.classList.add('js--container__player');
        renderEl2.innerHTML = `<p><h2>${newPlayer}</h2></p>`;
    }
    console.log(match);
    if (match.result !== OPEN) {
        /*
                archiveMatch();

        */
    }
}
export const getMatch = () => match;