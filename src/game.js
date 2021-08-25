const defaultGame = {
    turn: 0,
    buttons: ['', '', '', '', '', '', '', '', ''],
    disabled: true,
    comb: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]],
    over: false,
};

const createGame = () => {
    return {
        ...defaultGame,
        buttons: [...defaultGame.buttons],
        comb: [...defaultGame.comb],

    };
}

let game = createGame();

export const initNewGame = () => {
    game = createGame();
    console.log('init new game');

};
window.model = game;

export const getGame = () => game;
export const setGame = (game) => game;