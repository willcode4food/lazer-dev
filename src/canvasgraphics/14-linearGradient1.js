import { DegToRad } from 'lazer/math';
import { Canvas, BackgroundColor, graphics } from 'lazer/canvas';
import { AddToDOM } from 'lazer/dom';

const { Line, FillGradient, Rectangle, LinearGradient } = graphics;

export default class CanvasGraphics14LineGradient {

    constructor () {

        this.canvas = Canvas(512, 512);

        BackgroundColor(this.canvas, 'rgb(0, 0, 20)');

        AddToDOM(this.canvas, 'game');

        this.ctx = this.canvas.getContext('2d');

        //  method 1
        // let p = LinearGradient(this.ctx, 0, 0, 256, 256);
        // addColor(p, 0, '#ff0000');
        // addColor(p, 0.5, '#ffff00');
        // addColor(p, 1, '#00ff00');

        //  method 2
        // let p = LinearGradient(this.ctx, 0, 0, 256, 256, 0, '#ff0000', 0.5, '#00ff00', 1, '#0000ff');

        //  method 3
        let p = LinearGradient(this.ctx, 0, 0, 256, 256, [ 0, '#ff00f0', 0.5, '#05fff0', 1, '#8000ff' ]);

        Line(this.ctx, 2);

        Rectangle(this.ctx, 100, 100, 128, 128, DegToRad(20));

        FillGradient(this.ctx, p);

    }

}
