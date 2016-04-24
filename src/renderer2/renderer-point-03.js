import Phaser from 'lazer/Phaser';
import Canvas from 'lazer/canvas/Canvas';
import AddToDOM from 'lazer/dom/AddToDOM';
import PointRenderer from 'lazer/renderers/point/PointRendererF';

let canvas = Canvas(800, 600);

AddToDOM(canvas, 'game');

//  Try for WebGL then fall back to Canvas
// const renderer = new PointRenderer(canvas, Phaser.AUTO);

const renderer = PointRenderer(canvas, Phaser.AUTO);

console.log(renderer);

renderer.update(400, 300);

renderer.render();
