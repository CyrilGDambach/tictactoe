const renderEl = document.querySelector('.js--rangliste');
export const renderRankHTML = () => {
    renderEl.innerHTML = `
<table>
    <caption>Rangliste</caption>
    <thead>
    <tr>
        <th>Rang</th>
        <th>Name</th>
        <th>w</th>
        <th>u</th>
        <th>n</th>
    </tr>
    </thead>

    <tbody>
    <tr>
        <td>1</td>
        <td>Cyril</td>
        <td>3</td>
        <td>2</td>
        <td>1</td>
    </tr>
    </tbody>
    <tfoot>
    <tr>
        <td>_____</td>
        <td>_____________________</td>
        <td>___</td>
        <td>___</td>
        <td>___</td>
    </tr>
    </tfoot>

</table>`
};

const defaultRank = {
    players: [],
};
const createRank = () => {
    return {
        ...defaultRank,
        players: [...defaultGame.players]
    };
}