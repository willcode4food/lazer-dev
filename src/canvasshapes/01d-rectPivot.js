import { MainLoop } from 'lazer/system';
import { Canvas, GetContext, ResetTransform, shapes, graphics } from 'lazer/canvas';
import { AddToDOM } from 'lazer/dom';

const { Rectangle } = shapes;
const { Clear } = graphics;

class CanvasShapes01d {

    constructor () {

        this.canvas = Canvas(800, 600);

        AddToDOM(this.canvas, 'game');

        this.ctx = GetContext(this.canvas);

        this.rect1 = new Rectangle({ x: 200, y: 150, width: 64, height: 16, fill: 'rgba(255,0,255,1)' });
        this.rect1.pivotX = 100;

        this.rect2 = new Rectangle({ x: 600, y: 150, width: 64, height: 16, fill: 'rgba(0,255,255,0.8)' });
        this.rect2.pivotY = 100;

        this.loop = new MainLoop(60);

        this.loop.begin = (t => this.begin(t));
        this.loop.update = (delta => this.update(delta));
        this.loop.draw = (t => this.draw(t));

        this.loop.start();

    }

    begin () {

        ResetTransform(this.ctx);

        Clear(this.ctx, true, 0, 0, 50, 1);


    }

    update (delta) {

        this.rect1.rotation += 0.01;
        this.rect2.rotation += 0.01;

    }

    draw (i) {

        this.rect1.draw(this.ctx, i);
        this.rect2.draw(this.ctx, i);

    }

}

const CanvasShapes01dRectPoint = () => {
    new CanvasShapes01d();
};

export default CanvasShapes01dRectPoint;