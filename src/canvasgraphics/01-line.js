import { Canvas, BackgroundColor, graphics } from 'lazer/canvas';
import { AddToDOM } from 'lazer/dom';

const { Stroke, Rectangle, LineStyle } = graphics;
const Line = LineStyle;


class CanvasGraphics01 {

    constructor () {

        this.canvas = Canvas(512, 512);

        BackgroundColor(this.canvas, 'rgb(0, 0, 20)');

        AddToDOM(this.canvas, 'game');

        this.ctx = this.canvas.getContext('2d');

// export default function Line (context, width = 1, cap = 'butt', join = 'bevel', segments = null, offset = 0, miter = 10) {

        Line(this.ctx, 4);

// export default function Rectangle (context, x, y, width = 128, height = 128, angle = 0, fromCenter = false) {

        this.ctx.save();

        //  Calling Rectangle will transform the context and NOT reset it, as it's a pure Shape function.
        //  Use the Shape object to encapsulate transforms.

        Rectangle(this.ctx, 32, 32);

        Stroke(this.ctx, 255, 0, 255);

        this.ctx.restore();

        Rectangle(this.ctx, 256, 32);
        Stroke(this.ctx, 255, 0, 255);

    }

}

const CanvasGraphics01Line = () => {
    new CanvasGraphics01();
};

export default CanvasGraphics01Line;
