import {getGame} from "./game.js";
import handleGame from "./handlegame.js";
//view
const makeDomElButton = (entry, index) => {
    const game = getGame();
    const button = document.createElement('button');

    if (!game.over) {
        button.addEventListener('click', (e) => {
            handleGame(e, render)
        })
    }
    /*    button.textContent = entry || '-';*/
    button.setAttribute('type', 'button');
    button.classList.add(`gameboard__button--${entry}`);
    button.dataset.index = index;
    button.disabled = game.over;
    return button;

}
const render = ({buttons}) => {
    document.getElementsByClassName('js--container')[0].classList.remove('container__hide');

    const renderEl = document.querySelector('.js--gameboard');
    console.log(renderEl);
    renderEl.innerHTML = '';
    /*
        renderEl.style.display = "none";
    */

    buttons.forEach((entry, index) => {
        renderEl.appendChild(makeDomElButton(entry, index));
    });
};
export default render;
