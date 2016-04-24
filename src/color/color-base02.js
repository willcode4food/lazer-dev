import Color from 'lazer/graphics/color/BaseColor';

let red = new Color(255);

//  Default is the # prefix
console.log(red.toString());

//  Or 0x prefix
console.log(red.toString('0x'));

