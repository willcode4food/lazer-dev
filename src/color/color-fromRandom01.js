import Color from 'lazer/graphics/color/BaseColor';

import Canvas from 'lazer/canvas/Canvas';
import AddToDOM from 'lazer/dom/AddToDOM';
import BackgroundColor from 'lazer/canvas/BackgroundColor';

let canvas = Canvas(512, 512);

BackgroundColor(canvas, 'rgb(100, 0, 0)');

AddToDOM(canvas, 'game');

let ctx = canvas.getContext('2d');

let color1 = new Color.createRandom();
let color2 = new Color.createRandom();
let color3 = new Color.createRandom();

console.log(color1);
console.log(color2);
console.log(color3);

ctx.fillStyle = color1.rgba;
ctx.fillRect(0, 0, 64, 64);

ctx.fillStyle = color2.rgba;
ctx.fillRect(64, 0, 64, 64);

ctx.fillStyle = color3.rgba;
ctx.fillRect(128, 0, 64, 64);
