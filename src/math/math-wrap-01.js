import Wrap from 'lazer/math/Wrap';

//  Wrap from 0 to 640

let x = 630;

x = Wrap(x + 20, 0, 640);

console.log(x);
