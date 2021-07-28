const defaultGame = {
    turn: 0,
    buttons: ['', '', '', '', '', '', '', '', ''],
    comb: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]],
    over: false,
};

const texts = {
    'de': {
        'playerOnePlaying': 'Player %0% ist am zug'
    }
}

const createGame = () => {
    return {
        ...defaultGame,
        buttons: [...defaultGame.buttons],
        comb: [...defaultGame.comb],

    };
}

let game = createGame();

const archive = [];

export const initNewGame = () => {
    archive.push(game);
    game = createGame();
};

window.model = game;

export const getGame = () => game;
export const setGame = (game) => game;