import MainLoop from 'lazer/system/MainLoop';
import Canvas from 'lazer/canvas/Canvas';
import AddToDOM from 'lazer/dom/AddToDOM';
import BackgroundColor from 'lazer/canvas/BackgroundColor';
import Rectangle from 'lazer/canvas/shapes/Rectangle';

export default class CanvasGraphics {

    constructor () {

        this.canvas = Canvas(800, 600);

        BackgroundColor(this.canvas, 'rgb(0, 0, 50)');

        AddToDOM(this.canvas, 'game');

        this.ctx = this.canvas.getContext('2d');

        this.rects = new Set();

        for (let w = 32; w <= 256; w += 16)
        {
            this.rects.add(new Rectangle({ x: 400, y: 300, width: w, height: w, stroke: 'rgba(255,255,0,1)', anchor: 0.5 }));
        }

        this.loop = new MainLoop(60);

        this.loop.begin = (t => this.begin(t));
        this.loop.update = (delta => this.update(delta));
        this.loop.draw = (t => this.draw(t));

        this.loop.start();

    }

    begin () {

        this.ctx.clearRect(0, 0, 800, 600);

    }

    update (delta) {

        let i = 1;

        for (let rect of this.rects)
        {
            rect.angle += i;
            i += 0.1;
        }

    }

    draw (i) {

        for (let rect of this.rects)
        {
            rect.draw(this.ctx, i);
        }

    }

}

new CanvasGraphics();
