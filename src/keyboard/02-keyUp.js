import Key from 'lazer/input/keyboard/Key';
import AddKeyUp from 'lazer/input/keyboard/events/AddKeyUp';
import ProcessKeyUp from 'lazer/input/keyboard/events/ProcessKeyUp';

//  Create 3 keys
let A = Key('a');
let B = Key('b');
let C = Key('c');

//  Add them to our Set
let list = new Set([ A, B, C ]);

AddKeyUp(window, e => ProcessKeyUp(e, list));
