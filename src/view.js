import {getGame} from "./game.js";
import handleGame from "./handlegame.js";
import {match} from "./match.js";
/*    if (match.p2 === ''){
        button.disabled = true;
    } else{
        button.disabled = false;
    }*/
const makeDomElButton = (entry, index, disabled) => {

    const game = getGame();
    const button = document.createElement('button');

    if (!game.over) {

        button.addEventListener('click', (e) => {
            handleGame(e, render);
        })
    }
    button.setAttribute('type', 'button');
    button.classList.add(`gameboard__button`);
    button.classList.add(`gameboard__button--${entry}`);
    button.dataset.index = index;
    button.disabled = disabled;

    return button;
}
const render = ({ buttons, disabled }) => {
    document.getElementsByClassName('js--container')[0].classList.remove('container__hide');

    const renderEl = document.querySelector('.js--gameboard');

    renderEl.innerHTML = '';

    buttons.forEach((entry, index) => {
        renderEl.appendChild(makeDomElButton(entry, index, disabled));
    });
};
export default render;
