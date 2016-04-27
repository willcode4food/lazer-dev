// import Canvas from 'lazer/canvas/Canvas';
// import AddToDOM from 'lazer/dom/AddToDOM';
// import Line from 'lazer/canvas/graphics/LineStyle';
// import Stroke from 'lazer/canvas/graphics/Stroke';
// import CanvasCircle from 'lazer/canvas/graphics/Circle';
// import SetPixel from 'lazer/canvas/pixels/SetPixel';
// import Circle from 'lazer/geom/circle/Circle';
// import Random from 'lazer/geom/circle/Random';

import { Canvas, graphics, pixels } from 'lazer/canvas';
import { AddToDOM } from 'lazer/dom';
import { circle } from 'lazer/geom';

const { Circle, Random } = circle;
const { LineStyle, Stroke } = graphics;
const CanvasCircle = graphics.Circle;
const Line = LineStyle;
const { SetPixel } = pixels;

class Circle07 {

    constructor () {

        this.circle = Circle(256, 256, 128);

        this.canvas = Canvas(512, 512);

        AddToDOM(this.canvas, 'game');

        this.ctx = this.canvas.getContext('2d');

        Line(this.ctx, 2);

        CanvasCircle(this.ctx, this.circle.x, this.circle.y, this.circle.radius);

        Stroke(this.ctx, 255, 255, 255);

        for (let i = 0; i < 320; i++)
        {
            let p = Random(this.circle);

            SetPixel(this.ctx, p.x, p.y, 255, 255, 255);
        }

    }

}

const Circle07Random = () => {
    new Circle07();
};

export default Circle07Random;
