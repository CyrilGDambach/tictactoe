import {getGame} from "./game.js";
import {setTicker} from "./ticker.js";

const handleGame = ({target}, render) => {
    const game = getGame();
    const index = parseInt(target.dataset.index, 10);
    const {turn} = game;
    render(game);
    if (!game.buttons[index]) {
        game.buttons[index] = turn === 0 ? 'x' : 'o';
        game.turn = turn ? 0 : 1;
        if (turn === 0) {
            setTicker('Player 2 am Zug');
        } else {
            setTicker('Player 1 am Zug');
        }
    }
    for (let s = 0; s < 8; s++) {
        if (game.buttons[game.comb[s][0]] !== ""
            && game.buttons[game.comb[s][0]] === game.buttons[game.comb[s][1]]
            && game.buttons[game.comb[s][0]] === game.buttons[game.comb[s][2]]) {
            game.over = true;
            if (turn === 0) {
                console.log(turn);
                console.log('player 1 has won!');
                setTicker('Player 1 hat gewonnen.');

            }
            if (turn === 1) {
                console.log(turn);
                console.log('player 2 has won!');
                setTicker('Player 2 hat gewonnen.');
            }
        } else if (!game.buttons.includes('') && game.over !== true) {
            console.log('Unentschieden');
            const u = 'Unentschieden';
            game.over = true;

            setTicker(u);
        }

    }
    /*    console.log(game.buttons + ' ----- ' + game.buttons.length);*/
    console.log(game);
    render(game);
};
export default handleGame;