import {players} from "./player.js";

const renderEl = document.querySelector('.js--ranking');

console.log('opening ranking');

export const renderRankHTML = () => {
    renderEl.innerHTML = `
    <h3>Rangliste</h3>
    <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>w</th>
            <th>u</th>
            <th>n</th>
        </tr>
        </thead>
        <tbody>
            ${players.map(({uname, win, draw, loss}) => `<tr><td>${uname}</td><td>${win}</td><td>${draw}</td><td>${loss}</td></tr>`).join('')}
        </tbody>
        <tfoot>
        <tr>
            <td>_____________________</td>
            <td>___</td>
            <td>___</td>
            <td>___</td>
        </tr>
        </tfoot>
    </table>
    `;
};