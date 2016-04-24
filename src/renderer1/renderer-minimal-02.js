import Phaser from 'lazer/Phaser';
import Canvas from 'lazer/canvas/Canvas';
import AddToDOM from 'lazer/dom/AddToDOM';
import MinimalRenderer from 'lazer/renderers/minimal/MinimalRenderer';

let canvas = Canvas(800, 400);

AddToDOM(canvas, 'game');

//  Canvas only
const renderer = new MinimalRenderer(canvas, Phaser.CANVAS);

console.log(renderer);

renderer.render(200, 200, 0);
