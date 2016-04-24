import Color from 'lazer/graphics/color/BaseColor';

import Canvas from 'lazer/canvas/Canvas';
import AddToDOM from 'lazer/dom/AddToDOM';
import BackgroundColor from 'lazer/canvas/BackgroundColor';

let canvas = Canvas(512, 512);

BackgroundColor(canvas, 'rgb(0, 0, 0)');

AddToDOM(canvas, 'game');

let ctx = canvas.getContext('2d');

let color = new Color();

for (let y = 0; y < 8; y++)
{
    for (let x = 0; x < 8; x++)
    {
        color.fromRandom();
        ctx.fillStyle = color.rgba;
        ctx.fillRect(x * 64, y * 64, 64, 64);
    }
}
