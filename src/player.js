export const player = {
    uname: '',
    fname: '',
    lname: '',
    email: '',
    gender: '',
    rank: '',
    win: 0,
    loss: 0,
    draw: 0

};

export const players = [];


const incrementPropertyOfPlayer = (player, propName) => player[propName] += 1;

const getPlayerByUname = findString => players.find(({ uname }) => findString === uname);

export const setWin = winner => incrementPropertyOfPlayer(getPlayerByUname(winner), 'win');
export const setDraw = (p1, p2) => {
    incrementPropertyOfPlayer(getPlayerByUname(p1), 'draw');
    incrementPropertyOfPlayer(getPlayerByUname(p2), 'draw');
}
export const setLoss = looser => incrementPropertyOfPlayer(getPlayerByUname(looser), 'loss');


export const archivePlayer = (storagePlayers) => sessionStorage.setItem('playerss', JSON.stringify(storagePlayers));
var data = JSON.parse(sessionStorage.getItem('playerss'));
export const getPlayerData = () => data;

export const addPlayer = (player) => {
    players.push(player);
}
