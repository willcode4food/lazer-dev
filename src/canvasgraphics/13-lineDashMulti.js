import { Canvas, BackgroundColor, graphics } from 'lazer/canvas';
import { AddToDOM } from 'lazer/dom';

const { Stroke, Rectangle, LineStyle } = graphics;
const Line = LineStyle;

class CanvasGraphics13 {

    constructor () {

        this.canvas = Canvas(512, 512);

        BackgroundColor(this.canvas, 'rgb(0, 0, 20)');

        AddToDOM(this.canvas, 'game');

        let ctx = this.canvas.getContext('2d');

        this.rect1(ctx);
        this.rect2(ctx);
        this.rect3(ctx);
        this.rect4(ctx);

    }

    rect1 (ctx) {

        //  cap = butt, round or square
        //  join = bevel, round or miter

        ctx.save();

        ctx.beginPath();

        Line(ctx, 1, 'butt', 'miter', [5, 5, 10, 5]); // miter = crisp pixels at 1px line width stroke (+ see below)
        //  With a lineWidth of 1 (or any odd number) we need to -0.5 this to retain pixel clarity:
        Rectangle(ctx, 32-0.5, 32-0.5);
        Stroke(ctx, 255, 255, 0);

        ctx.closePath();

        ctx.restore();

    }

    rect2 (ctx) {

        //  cap = butt, round or square
        //  join = bevel, round or miter

        ctx.save();

        ctx.beginPath();

        Line(ctx, 4, 'square', 'miter', [4, 8]);
        Rectangle(ctx, 256, 32);
        Stroke(ctx, 255, 255, 0);

        ctx.closePath();

        ctx.restore();

    }

    rect3 (ctx) {

        //  cap = butt, round or square
        //  join = bevel, round or miter

        ctx.save();

        ctx.beginPath();

        Line(ctx, 12, 'butt', 'bevel', [5, 10]);
        Rectangle(ctx, 32, 256);
        Stroke(ctx, 255, 255, 0);

        ctx.closePath();

        ctx.restore();

    }

    rect4 (ctx) {

        //  cap = butt, round or square
        //  join = bevel, round or miter

        ctx.save();

        ctx.beginPath();

        Line(ctx, 12, 'round', 'round', [6, 24]);
        Rectangle(ctx, 256, 256);
        Stroke(ctx, 255, 255, 0);

        ctx.closePath();

        ctx.restore();

    }

}

const CanvasGraphics13LineDashMulti = () => {
    new CanvasGraphics13();
};

export default CanvasGraphics13LineDashMulti;