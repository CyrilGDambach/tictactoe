const renderEl = document.querySelector('.js--ticker');
renderEl.classList.add('js--ticker');
renderEl.innerHTML = 'Player 1 startet';

let ticker = 'Player 1 beginnt';
export const setTicker = (a) => {
    ticker = a;

    renderEl.innerHTML = ticker;
}

