import State from 'lazer/state/State';
import StateManager from 'lazer/state/StateManager';

let mainMenu = State( { name: 'MainMenu', init: init, preload: preload, create: create });

console.log(mainMenu);

function init () {

    console.log('init');

}

function preload () {

    console.log('preload');

}

function create () {

    console.log('create');

}