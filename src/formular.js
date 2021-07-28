import {players, addPlayer, player} from './player.js';

const renderEl = document.querySelector('.js--formular');
const renderEl2 = document.querySelector('.js--columns__playerone');

const renderButtonSubmit = ({buttonName, name, email}) =>
    `<button type='submit' class='btn btn-default js--button__submit'>${buttonName}</button>`;

const renderForm = () => {
    renderEl.innerHTML =
        `<form class='form js--form'>
   <div>
     <label>Benutzername:
       <input type='text' name='uname' value='Cyrilo' class='js--form__uname'>
     </label>
   </div>
   <div>
     <label>Vorname:
       <input type='text' name='fname' value='Cyril' class='js--form__fname'>
     </label>
   </div>
   <div>
     <label>Nachname:
       <input type='text' name='lname' value='Dambach' class='js--form__lname'>
     </label>
   </div>
   <div>
   <label>
     Geschlecht:
   </label>
     <label>
       Männlich
       <input type='radio' name='gender' value='männlich' class='js--form__male'>
     </label>
     <label>
       Weiblich
       <input type='radio' name='gender' value='weiblich' class='js--form__female'>
     </label>
     <label>
       Anderes
       <input type='radio' name='gender' value='anderes' class='js--form__divers'>
     </label>
   </div>   
   <div>
     <label>Email:
       <input type='email' name='email' value='cyrildambach@gmail.com' class='js--form__email'>
     </label>
   </div>
   <div>
   ${renderButtonSubmit({
            buttonName: 'player1'
        })}

     
     <button type='button' class='btn btn-default js--button__back'>Back</button>
   </div>
 </form> `;
}
const renderForm = () => {
    document.querySelector('.js--button__submit').addEventListener('click', submitForm);
    document.querySelector('.js--button__back').addEventListener('click', hideForm);
    document.querySelector('.js--form__uname').addEventListener('keyup', onKeyUp);
}

renderForm();

const hideForm = () => {
    document.getElementsByClassName('js--form')[0].classList.add('form__hide');
    document.getElementsByClassName('js--container')[0].classList.remove('container__hide');
    document.getElementsByClassName('js--rangliste')[0].classList.remove('rangliste__hide');
}
/*    renderPlayer = () => {
        hideForm();
    }*/
//COMPOSITION
const submitForm = () => {
    console.log('submit');
    hideForm();
}


const onKeyUp = (e1) => {
    const usernames = [];

    for (let p = 0; p < players.length; p++) {
        usernames.push(players[p].uname);
    }
    console.log(usernames);

    function checkPlayerExists() {
        return usernames.includes(e1.currentTarget.value);
    }

    const player1 = players.filter(checkPlayerExists);

    if (checkPlayerExists()) {
        for (let x = 0; x < usernames.length; x++) {
            if (e1.currentTarget.value === usernames[x]) {
                //hier musste der index angepasst werden (for und if)
                document.querySelector('.js--form__fname').value = player1[x].fname;
                document.querySelector('.js--form__lname').value = player1[x].lname;
                document.querySelector('.js--form__email').value = player1[x].email;
                if (player1[x].gender === 'männlich') {
                    document.querySelector('.js--form__male').setAttribute('checked', 'checked');
                } else if (player1[x].gender === 'weiblich') {
                    document.querySelector('.js--form__female').setAttribute('checked', 'checked');
                } else {
                    document.querySelector('.js--form__divers').setAttribute('checked', 'checked');
                }
            }
        }
    }
}

document.querySelector('.js--form').addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    let obj = {};

    for (let [key, value] of data) {
        obj[key] = value;
    }
    console.log(obj);
    if (players.includes(obj.uname)) {
        obj = null;
    } else {
        addPlayer(obj);
    }
    console.log(players);
});
