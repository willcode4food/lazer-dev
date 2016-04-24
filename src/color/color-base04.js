import Color from 'lazer/graphics/color/BaseColor';

let color1 = new Color(255);

let color2 = color1.clone();

color2.red = 100;

console.log(color1.toString());
console.log(color2.toString());
