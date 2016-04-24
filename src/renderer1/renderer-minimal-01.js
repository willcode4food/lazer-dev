import Phaser from 'lazer/Phaser';
import Canvas from 'lazer/canvas/Canvas';
import AddToDOM from 'lazer/dom/AddToDOM';
import MinimalRenderer from 'lazer/renderers/minimal/MinimalRenderer';

let canvas = Canvas(800, 400);

AddToDOM(canvas, 'game');

//  Try for WebGL then fall back to Canvas
const renderer = new MinimalRenderer(canvas, Phaser.AUTO);

console.log(renderer);

renderer.render(255, 0, 0);
