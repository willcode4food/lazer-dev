import { DegToRad } from 'lazer/math';
import { Canvas, BackgroundColor, graphics } from 'lazer/canvas';
import { AddToDOM } from 'lazer/dom';

const { Line, Stroke, Rectangle } = graphics;

export default class CanvasGraphics09Rect2 {

    constructor () {

        this.canvas = Canvas(512, 512);

        BackgroundColor(this.canvas, 'rgb(0, 0, 20)');

        AddToDOM(this.canvas, 'game');

        this.ctx = this.canvas.getContext('2d');

        Line(this.ctx, 2);

// export default function Rectangle (context, x, y, width = 128, height = 128, angle = 0, fromCenter = false) {

        //  Rotate from center
        Rectangle(this.ctx, 100, 100, 128, 128, DegToRad(20), true);

        Stroke(this.ctx, 255, 0, 255);


    }

}
