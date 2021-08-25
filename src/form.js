import {players, addPlayer, player} from './player.js';
import {match, matchStart, setMatchPlayer} from "./match.js";
import {renderRankHTML} from "./ranking.js";

const renderEl = document.querySelector('.js--container-form');

const renderFormHTML = () => {
    renderEl.innerHTML = ` 
        <div class='user-reg js--user-reg user-reg--hide'>
            <form class='user-reg__form js--user-reg__form'>
                <div>
                    <label>Benutzername:
                        <input type='text' name='uname' value='Cyrilo' class='js--user-reg__form__uname'>
                    </label>
                </div>
                <div>
                    <label>Vorname:
                        <input type='text' name='fname' value='Cyril' class='js--_user-reg__form_fname'>
                    </label>
                </div>
                <div>
                    <label>Nachname:
                        <input type='text' name='lname' value='Dambach' class='js--user-reg__form__lname'>
                    </label>
                </div>
                <div>
                    <label>
                        Geschlecht:
                    </label>
                    <label>
                        Männlich
                        <input type='radio' name='gender' value='männlich' class='js--user-reg__form__male'>
                    </label>
                    <label>
                        Weiblich
                        <input type='radio' name='gender' value='weiblich' class='js--user-reg__form__female'>
                    </label>
                    <label>
                        Anderes
                        <input type='radio' name='gender' value='anderes' class='js--user-reg__form__divers'>
                    </label>
                </div>
                <div>
                    <label>Email:
                        <input type='email' name='email' value='cyrildambach@gmail.com' class='js--form__email'>
                    </label>
                </div>
                <div>
                    <button type='submit' class='btn btn-default '>Submit</button>
                    <button type='button' class='btn btn-default js--button__back'>Back</button>
                </div>
            </form>
            <span class="js--user-reg__error user-reg__error"></span>
        </div>`;
}

export const renderForm = () =>
    {
        renderFormHTML();
        document.querySelector('.js--button__back').addEventListener('click', hideForm);
        document.querySelector('.js--user-reg__form__uname').addEventListener('keyup', onKeyUp);
        enableSubmitListener();
    }

export const hideForm = () =>
    {
        document.getElementsByClassName('js--user-reg')[0].classList.add('user-reg--hide');
        document.getElementsByClassName('js--container')[0].classList.remove('container--hide');
    }
export const showForm = () =>
    {
        document.getElementsByClassName('js--user-reg')[0].classList.remove('user-reg--hide');
        document.getElementsByClassName('js--container')[0].classList.add('container--hide');
    }

const getUsernames = () =>
    {
        const usernames = [];

        for (let p = 0; p < players.length; p++) {
            usernames.push(players[p].uname);
        }
        console.log(usernames);
        return usernames;
    }

//COMPOSITION
const enableSubmitListener = () =>
    {
        document.querySelector('.js--user-reg__form').addEventListener('submit', onSubmit);
    }
const setError = () =>
    {
        const renderFormError = document.querySelector('.js--user-reg__error');
        renderFormError.innerHTML = 'Man kann nicht gegen sich selbst spielen! Gib einen neuen Nutzer ein.';
    }

const onSubmit = (e) =>
    {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        console.log('submit');


        let obj = {
            ...player,
        };

        for (let [key, value] of data) {
            obj[key] = value;
        }
        console.log(obj);
        const {uname} = obj;
        console.log(obj.uname);
        console.log(uname);
        if (match.p1 === uname) {
            console.log('uname ist gleich match p1');
            setError();
            return
        }

        if (getUsernames().includes(uname)) {
            console.log('helloooo');
            obj = null;
        } else {
            addPlayer(obj);
        }
        console.log(players);
        setMatchPlayer(uname);
        renderRankHTML();
        matchStart();
        hideForm();
    }

const onKeyUp = (e1) =>
    {
        const usernames = getUsernames();

        function checkPlayerExists() {
            return usernames.includes(e1.currentTarget.value);
        }

        const player1 = players.filter(checkPlayerExists);

        if (checkPlayerExists()) {
            for (let x = 0; x < usernames.length; x++) {
                if (e1.currentTarget.value === usernames[x]) {
                    document.querySelector('.js--user-reg__form__fname').value = player1[x].fname;
                    document.querySelector('.js--user-reg__form__lname').value = player1[x].lname;
                    document.querySelector('.js--user-reg__form__email').value = player1[x].email;
                    if (player1[x].gender === 'männlich') {
                        document.querySelector('.js--user-reg__form__male').setAttribute('checked', 'checked');
                    } else if (player1[x].gender === 'weiblich') {
                        document.querySelector('.js--user-reg__form__female').setAttribute('checked', 'checked');
                    } else {
                        document.querySelector('.js--user-reg__form__divers').setAttribute('checked', 'checked');
                    }
                }
            }
        }
    }