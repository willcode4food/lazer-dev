import { Canvas, BackgroundColor, graphics } from 'lazer/canvas';
import { AddToDOM } from 'lazer/dom';

const { Stroke, Circle, LineStyle } = graphics;
const Line = LineStyle;

class CanvasGraphics11 {

    constructor () {

        this.canvas = Canvas(512, 512);

        BackgroundColor(this.canvas, 'rgb(0, 0, 20)');

        AddToDOM(this.canvas, 'game');

        this.ctx = this.canvas.getContext('2d');

// export default function Line (context, width = 1, cap = 'butt', join = 'bevel', segments = null, offset = 0, miter = 10) {

        Line(this.ctx, 4);

        //  Calling Circle will transform the context and NOT reset it, as it's a pure Shape function.
        //  Use the Shape object to encapsulate transforms.

        // export default function Circle (context, x, y, radius = 128, angle = 0, fromCenter = false) {

        Circle(this.ctx, 256, 256);

        Stroke(this.ctx, 255, 0, 255);

    }

}

const CanvasGraphics11Circle = () => {
    new CanvasGraphics11();
};

export default CanvasGraphics11Circle;