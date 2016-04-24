import Phaser from 'lazer/Phaser';
import Canvas from 'lazer/canvas/Canvas';
import AddToDOM from 'lazer/dom/AddToDOM';
import PointRenderer from 'lazer/renderers/point/PointRenderer';

let canvas = Canvas(800, 600);

AddToDOM(canvas, 'game');

//  Canvas only
const renderer = new PointRenderer(canvas, Phaser.CANVAS);

console.log(renderer);

renderer.update(100, 100);

renderer.render();
