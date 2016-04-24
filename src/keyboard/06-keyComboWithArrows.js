
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

//  37 = LEFT
//  38 = UP
//  39 = RIGHT
//  40 = DOWN

let combo = KeyCombo([ 38, 38, 38, 40, 40, 40, 37, 37, 37, 39, 39, 39 ]);

console.log(combo);

AddKeyDown(window, e => checkCombo(e, combo));

console.log('Keyboard ready');
