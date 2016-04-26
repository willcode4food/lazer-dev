import { DegToRad } from 'lazer/math';
import { Canvas, BackgroundColor, graphics } from 'lazer/canvas';
import { AddToDOM } from 'lazer/dom';

const { Stroke, Arc, LineStyle } = graphics;
const Line = LineStyle;

class CanvasGraphics12 {

    constructor () {

        this.canvas = Canvas(512, 512);

        BackgroundColor(this.canvas, 'rgb(0, 0, 20)');

        AddToDOM(this.canvas, 'game');

        this.ctx = this.canvas.getContext('2d');

        Line(this.ctx, 4);

        //  Calling Arc will transform the context and NOT reset it, as it's a pure Shape function.
        //  Use the Shape object to encapsulate transforms.

        // export default function Arc (context, x, y, radius = 128, startAngle = 0, endAngle = 360, rotation = 0) {

        Arc(this.ctx, 256, 256, 128, DegToRad(0), DegToRad(90));
        // Arc(this.ctx, 256, 256, 128, DegToRad(0), DegToRad(90), 0, true); // anti clockwise
        // Arc(this.ctx, 256, 256, 128, DegToRad(0), DegToRad(180));
        // Arc(this.ctx, 256, 256, 128, DegToRad(0), DegToRad(270));
        // Arc(this.ctx, 256, 256, 128, DegToRad(90), DegToRad(270));
        // Arc(this.ctx, 256, 256, 128, DegToRad(90), DegToRad(270), DegToRad(20)); // with rotation

        Stroke(this.ctx, 255, 0, 255);

    }

}

const CanvasGraphics12Arc = () => {
    new CanvasGraphics12();
};

export default CanvasGraphics12Arc;