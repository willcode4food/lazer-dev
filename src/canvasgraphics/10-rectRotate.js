import { DegToRad, Wrap } from 'lazer/math';
import { Canvas, BackgroundColor, graphics } from 'lazer/canvas';
import { AddToDOM } from 'lazer/dom';
import { MainLoop } from 'lazer/system';

const { Stroke, Rectangle, LineStyle } = graphics;
const Line = LineStyle;

class CanvasGraphics10 {

	constructor () {

		this.canvas = Canvas(512, 512);

		BackgroundColor(this.canvas, 'rgb(0, 0, 20)');

		AddToDOM(this.canvas, 'game');

		this.ctx = this.canvas.getContext('2d');

		this.angle = 0;

		this.loop = new MainLoop(60);

		this.loop.begin = (t => this.begin(t));
		this.loop.update = (delta => this.update(delta));
		this.loop.draw = (t => this.draw(t));

		this.loop.start();

	}

	begin () {

		this.ctx.clearRect(0, 0, 512, 512);

	}

	update (delta) {

		this.angle++;

		this.angle = Wrap(this.angle, 0, 360);

	}

	draw (i) {

		this.ctx.save();

		this.ctx.beginPath();

		Line(this.ctx, 2);

		//  Rotate from center
		Rectangle(this.ctx, 256, 256, 128, 128, DegToRad(this.angle), true);

		Stroke(this.ctx, 255, 255, 0);

		this.ctx.closePath();

		this.ctx.restore();

	}

}

const CanvasGraphics10RectRotate = () => {
	new CanvasGraphics10();
};

export default CanvasGraphics10RectRotate;