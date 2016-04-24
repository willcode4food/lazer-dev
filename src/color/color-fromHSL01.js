import Color from 'lazer/graphics/color/BaseColor';

import Canvas from 'lazer/canvas/Canvas';
import AddToDOM from 'lazer/dom/AddToDOM';
import BackgroundColor from 'lazer/canvas/BackgroundColor';

let canvas = Canvas(512, 640);

BackgroundColor(canvas, 'rgb(0, 0, 0)');

AddToDOM(canvas, 'game');

let ctx = canvas.getContext('2d');

let color = new Color();

for (let y = 0; y < 360; y++)
{
    color.fromHSLColorWheel(y);
    ctx.fillStyle = color.rgba;
    ctx.fillRect(0, y*2, 512, 2);
}
