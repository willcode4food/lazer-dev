import Key from 'lazer/input/keyboard/Key';
import AddKeyDown from 'lazer/input/keyboard/events/AddKeyDown';
import ProcessKeyDown from 'lazer/input/keyboard/events/ProcessKeyDown';

//  Create 3 keys
let A = Key('a');
let B = Key('b');
let C = Key('c');

//  Add them to our Set (could also be a plain Array, anything you can iterate)
let list = new Set([ A, B, C ]);

AddKeyDown(window, e => ProcessKeyDown(e, list));
