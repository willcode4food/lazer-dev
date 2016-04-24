import MainLoop from 'lazer/system/MainLoop';
import Between from 'lazer/math/Between';
import Canvas from 'lazer/canvas/Canvas';
import GetContext from 'lazer/canvas/GetContext';
import Clear from 'lazer/canvas/graphics/Clear';
import ResetTransform from 'lazer/canvas/ResetTransform';
import AddToDOM from 'lazer/dom/AddToDOM';
import BackgroundColor from 'lazer/canvas/BackgroundColor';
import Rectangle from 'lazer/canvas/shapes/Rectangle';

export default class CanvasGraphics {

    constructor () {

        this.canvas = Canvas(800, 600);

        AddToDOM(this.canvas, 'game');

        this.ctx = GetContext(this.canvas);

        this.rect1 = new Rectangle({ x: 200, y: 300, width: 128, height: 128, fill: 'rgba(255,0,255,0.8)', anchor: 0 });
        this.rect2 = new Rectangle({ x: 400, y: 300, width: 128, height: 128, fill: 'rgba(0,255,255,0.8)', anchor: 0.5 });
        this.rect3 = new Rectangle({ x: 600, y: 300, width: 128, height: 128, fill: 'rgba(255,255,0,0.8)', anchor: 1 });

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
        this.rect3.rotation += 0.01;

    }

    draw (i) {

        this.rect1.draw(this.ctx, i);
        this.rect2.draw(this.ctx, i);
        this.rect3.draw(this.ctx, i);

    }

}

new CanvasGraphics();
