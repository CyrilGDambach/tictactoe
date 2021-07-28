const renderEl = document.querySelector('.js--ticker');
renderEl.classList.add('js--ticker');
renderEl.innerHTML = 'Player 1 startet';

let ticker = 'Player 1 beginnt';
export const setTicker = (a) => {
    ticker = a;
    /*
        console.log(ticker);
    */
    renderEl.innerHTML = ticker;
}

/*        renderEl.innerHTML =
            `<div class="js--spielstand__output" >
             </div>`;*/
