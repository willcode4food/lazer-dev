import Color from 'lazer/graphics/color/BaseColor';

import Canvas from 'lazer/canvas/Canvas';
import AddToDOM from 'lazer/dom/AddToDOM';
import BackgroundColor from 'lazer/canvas/BackgroundColor';

let canvas = Canvas(512, 256);

BackgroundColor(canvas, 'rgb(0, 0, 0)');

AddToDOM(canvas, 'game');

let ctx = canvas.getContext('2d');

let sourceColor = new Color(255);
let destColor = new Color(255, 0, 255);
let mixColor = new Color();

const length = 128;

for (let i = 0; i < length; i++)
{
    mixColor.fromInterpolation(sourceColor, destColor, length, i);
    ctx.fillStyle = mixColor.rgba;
    ctx.fillRect(0, i*2, 512, 2);
}
