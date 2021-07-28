export const player = {
    uname: '',
    fname: '',
    lname: '',
    email: '',
    gender: ''
};

export const players = [];
const playerx = {
    uname: 'cyrilo',
    fname: 'cyril',
    lname: 'dambach',
    email: 'cyrildambach@gmail.com',
    gender: 'männlich'
};
const playery = {
    uname: 'simomaaa',
    fname: 'simona',
    lname: 'lalala',
    email: 'sifa@mail.ch',
    gender: 'weiblich'
};
const playerz = {
    uname: 'timolein',
    fname: 'timo',
    lname: 'lauter',
    email: 'timolaut@tmail.com',
    gender: 'männlich'
};

players.push(playerx);
players.push(playery);
players.push(playerz);
console.log(players);

export const addPlayer = (player) => {
    players.push(player);
}

// export const getPlayers = () => {
//     return players;
// }
