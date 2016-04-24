import MainLoop from 'lazer/system/MainLoop';
import Canvas from 'lazer/canvas/Canvas';
import AddToDOM from 'lazer/dom/AddToDOM';
import BackgroundColor from 'lazer/canvas/BackgroundColor';
import Star from 'lazer/canvas/shapes/Star';

export default class CanvasGraphics {

    constructor () {

        this.canvas = Canvas(800, 600);

        BackgroundColor(this.canvas, 'rgb(50, 60, 70)');

        AddToDOM(this.canvas, 'game');

        this.ctx = this.canvas.getContext('2d');

        this.star1 = new Star({ x: 200, y: 200, fill: 'rgba(255, 255, 0, 1)' });
        this.star2 = new Star({ x: 300, y: 300, fill: 'rgba(200, 0, 100, 0.7)', innerRadius: 64, outerRadius: 128 });
        this.star3 = new Star({ x: 600, y: 200, stroke: 'rgba(55, 90, 200, 0.8)', innerRadius: 100, outerRadius: 300, points: 12, lineWidth: 4 });

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

        this.star1.angle++;
        this.star2.angle++;
        this.star3.angle++;

    }

    draw (i) {

        this.star1.draw(this.ctx, i);
        this.star2.draw(this.ctx, i);
        this.star3.draw(this.ctx, i);

    }

}

new CanvasGraphics();
