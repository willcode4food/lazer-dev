import { Canvas, graphics, pixels } from 'lazer/canvas';
import { AddToDOM } from 'lazer/dom';
import { circle } from 'lazer/geom';
import { DegToRad, Between} from 'lazer/math';

const { Circle, CircumferencePoint } = circle;
const { LineStyle, Stroke } = graphics;
const Line = LineStyle;
const CanvasCircle = graphics.Circle;
const { SetPixel } = pixels;

class Circle09 {

    constructor () {

        this.circle = Circle(256, 256, 128);

        this.canvas = Canvas(512, 512);

        AddToDOM(this.canvas, 'game');

        this.ctx = this.canvas.getContext('2d');

        Line(this.ctx, 1);

        CanvasCircle(this.ctx, this.circle.x, this.circle.y, this.circle.radius);

        Stroke(this.ctx, 255, 255, 255);

        for (let i = 0; i < 32; i++)
        {
            let p = CircumferencePoint(this.circle, DegToRad(Between(-180, 180)));

            SetPixel(this.ctx, p.x, p.y, 255, 0, 0);
        }

    }

}

const Circle09Circumference = () => {
    new Circle09();
};

export default Circle09Circumference;