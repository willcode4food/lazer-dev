
import AddKeyDown from 'lazer/input/keyboard/events/AddKeyDown';
import KeyCombo from 'lazer/input/keyboard/combo/KeyCombo';
import ProcessKeyCombo from 'lazer/input/keyboard/combo/ProcessKeyCombo';

function checkCombo (event, combo) {

    let result = ProcessKeyCombo(event, combo);

    if (result)
    {
        console.log('COMBO MATCHED!');
    }

}

let combo = KeyCombo('ABCDEF');

console.log(combo);

AddKeyDown(window, e => checkCombo(e, combo));

console.log('Keyboard ready');
