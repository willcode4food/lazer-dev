import { MainLoop } from 'lazer/system';
import { Canvas, GetContext, ResetTransform, shapes, graphics } from 'lazer/canvas';
import { AddToDOM } from 'lazer/dom';

const { Rectangle } = shapes;
const { Clear } = graphics;

export default class CanvasShapes01Rect {

    constructor () {

        this.canvas = Canvas(800, 600);

        AddToDOM(this.canvas, 'game');

        this.ctx = GetContext(this.canvas);

        this.rect = new Rectangle({ x: 0, y: 100, width: 64, height: 64, fill: 'rgba(255,0,255,1)', anchor: 0.5 });

        this.loop = new MainLoop(60);

        this.loop.begin = (t => this.begin(t));
        this.loop.update = (delta => this.update(delta));
        this.loop.draw = (t => this.draw(t));

        this.loop.start();

    }

    begin () {

        ResetTransform(this.ctx);

        Clear(this.ctx, true, 0, 0, 50, 1);

        this.rect.x++;


    }

    update (delta) {

        this.rect.angle += 1.5;

    }

    draw (i) {

        this.rect.draw(this.ctx, i);

    }

}
