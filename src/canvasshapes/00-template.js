import { MainLoop } from 'lazer/system';
import { Canvas, BackgroundColor } from 'lazer/canvas';
import { AddToDOM } from 'lazer/dom';

export default class CanvasShapes00Template {

    constructor () {

        this.canvas = Canvas(800, 600);

        BackgroundColor(this.canvas, 'rgb(0, 0, 50)');

        AddToDOM(this.canvas, 'game');

        this.ctx = this.canvas.getContext('2d');

        this.loop = new MainLoop(60);

        this.loop.begin = (t => this.begin(t));
        this.loop.update = (delta => this.update(delta));
        this.loop.draw = (t => this.draw(t));

        this.loop.start();

    }

    begin () {

        // this.ctx.clearRect(0, 0, 800, 600);

    }

    update (delta) {

        //  x += x * this.loop.physicsStep

    }

    draw (i) {

        //  interpolated: tx = ((x - oldX) * i)

    }

}
