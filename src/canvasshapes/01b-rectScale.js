import { MainLoop } from 'lazer/system';
import { Canvas, GetContext, ResetTransform, shapes, graphics } from 'lazer/canvas';
import { AddToDOM } from 'lazer/dom';

const { Rectangle } = shapes;
const { Clear } = graphics;

class CanvasShapes01b {

    constructor () {

        this.canvas = Canvas(800, 600);

        AddToDOM(this.canvas, 'game');

        this.ctx = GetContext(this.canvas);

        this.rect1 = new Rectangle({ x: 0, y: 0, width: 64, height: 64, fill: 'rgba(255,0,255,1)', scaleX: 2, scaleY: 2 });
        this.rect2 = new Rectangle({ x: 32, y: 32, width: 64, height: 64, fill: 'rgba(0,255,255,0.8)', scaleX: 2, scaleY: 0.5 });

        this.loop = new MainLoop(60);

        this.loop.begin = (t => this.begin(t));
        this.loop.update = (delta => this.update(delta));
        this.loop.draw = (t => this.draw(t));

        this.loop.start();

    }

    begin () {

        ResetTransform(this.ctx);

        Clear(this.ctx, true, 0, 0, 50, 1);

        this.rect1.x++;
        this.rect2.x++;

    }

    update (delta) {

    }

    draw (i) {

        this.rect1.draw(this.ctx, i);
        this.rect2.draw(this.ctx, i);

    }

}

const CanvasShapes01bRectScale = () => {
    new CanvasShapes01b();
};

export default CanvasShapes01bRectScale;