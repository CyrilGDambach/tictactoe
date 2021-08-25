import {getGame} from "./game.js";
import {setTicker} from "./ticker.js";
import {MATCH_WINNER_ID, matchOver, match} from "./match.js";
import {renderRankHTML} from "./ranking.js";

const handleGame = ({target}, render) => {


    const game = getGame();
    const index = parseInt(target.dataset.index, 10);
    const {turn} = game;
    if (!game.buttons[index]) {
        game.buttons[index] = turn === 0 ? 'x' : 'o';
        game.turn = turn ? 0 : 1;
        if (turn === 0) {
            setTicker('Player 2 am Zug');
        } else {
            setTicker('Player 1 am Zug');
        }
    }
    const ticker = {
        oneWon: '',
        twoWon: '',
        draw: 'Unentschieden'
    }
    for (let s = 0; s < 8; s++) {
        if (game.buttons[game.comb[s][0]] !== ""
            && game.buttons[game.comb[s][0]] === game.buttons[game.comb[s][1]]
            && game.buttons[game.comb[s][0]] === game.buttons[game.comb[s][2]]) {
            game.over = true;
            if (turn === 0) {
                console.log(match.p1 + ' has won!')
                ticker.oneWon = match.p1 + ' hat gewonnen.'
                setTicker(ticker.oneWon);
                matchOver(MATCH_WINNER_ID.P1);
                renderRankHTML();
            }
            if (turn === 1) {
                console.log(match.p2 + ' has won!');
                ticker.twoWon = match.p2 + ' hat gewonnen.'
                setTicker(ticker.twoWon);
                matchOver(MATCH_WINNER_ID.P2);
                renderRankHTML();
                game.over = true;

            }
        } else if (!game.buttons.includes('') && game.over !== true) {
            console.log('Unentschieden');
            game.over = true;
            setTicker(ticker.draw);
            matchOver(MATCH_WINNER_ID.DRAW);
            renderRankHTML();
        }

    }
/*    console.log(match)
    if (match.p1 && match.p2) {
       game.disabled = false;
    }*/
    console.log('rendergame');
    render(game);
};
export default handleGame;