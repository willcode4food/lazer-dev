import { Canvas, graphics, pixels } from 'lazer/canvas';
import { AddToDOM } from 'lazer/dom';
import { circle } from 'lazer/geom';

const { Circle, Random } = circle;
const { LineStyle, Stroke } = graphics;
const Line = LineStyle;
const CanvasCircle = graphics.Circle;
const { SetPixel } = pixels;

class Circle08 {

    constructor () {

        this.circle = Circle(256, 0, 128);

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

const Circle08Random2 = () => {
    new Circle08();
};

export default Circle08Random2;
