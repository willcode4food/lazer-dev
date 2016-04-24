
import Key from 'lazer/input/keyboard/Key';
import AddKeyDown from 'lazer/input/keyboard/events/AddKeyDown';
import ProcessKeyDown, { onDown } from 'lazer/input/keyboard/events/ProcessKeyDown';

function fire (event) {

    console.log('pew pew', event.keyCode);

}

onDown.add(fire);

AddKeyDown(window, e => ProcessKeyDown(e, null, true));

console.log('Keyboard ready');
