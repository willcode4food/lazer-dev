import MainLoop from 'lazer/system/MainLoop';
import Canvas from 'lazer/canvas/Canvas';
import AddToDOM from 'lazer/dom/AddToDOM';
import BackgroundColor from 'lazer/canvas/BackgroundColor';
import Star from 'lazer/canvas/shapes/Star';

export default class CanvasGraphics {

    constructor () {

        this.canvas = Canvas(800, 600);

        BackgroundColor(this.canvas, 'rgb(0, 0, 0)');

        AddToDOM(this.canvas, 'game');

        this.ctx = this.canvas.getContext('2d');

        this.star1 = new Star({ x: 400, y: 300, stroke: 'rgba(255, 255, 0, 1)', innerRadius: 100, outerRadius: 280, lineDashSegments: [5, 5], lineWidth: 2 });

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

        this.star1.angle--;

        this.star1.lineDashOffset--;

        if (this.star1.lineDashOffset < -9)
        {
            this.star1.lineDashOffset = 0;
        }

    }

    draw (i) {

        this.star1.draw(this.ctx, i);

    }

}

new CanvasGraphics();
