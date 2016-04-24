import Canvas from 'lazer/canvas/Canvas';
import AddToDOM from 'lazer/dom/AddToDOM';
import Line from 'lazer/canvas/graphics/LineStyle';
import Stroke from 'lazer/canvas/graphics/Stroke';
import CanvasCircle from 'lazer/canvas/graphics/Circle';
import SetPixel from 'lazer/canvas/pixels/SetPixel';
import Circle from 'lazer/geom/circle/Circle';
import CircumferencePoint from 'lazer/geom/circle/CircumferencePoint';
import DegToRad from 'lazer/math/DegToRad';
import Between from 'lazer/math/Between';

export default class CircleTest {

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

new CircleTest();
