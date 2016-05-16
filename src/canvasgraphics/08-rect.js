import { DegToRad } from 'lazer/math';
import { Canvas, BackgroundColor, graphics } from 'lazer/canvas';
import { AddToDOM } from 'lazer/dom';

const { Stroke, Rectangle, LineStyle } = graphics;
const Line = LineStyle;

class CanvasGraphics08 {

	constructor () {

		this.canvas = Canvas(512, 512);

		BackgroundColor(this.canvas, 'rgb(0, 0, 20)');

		AddToDOM(this.canvas, 'game');

		this.ctx = this.canvas.getContext('2d');

		Line(this.ctx, 2);

// export default function Rectangle (context, x, y, width = 128, height = 128, angle = 0, fromCenter = false) {

		//  Rotate from corner
		Rectangle(this.ctx, 100, 100, 128, 128, DegToRad(20));

		Stroke(this.ctx, 255, 0, 255);


	}

}

const CanvasGraphics08Rect = () => {
	new CanvasGraphics08();
};

export default CanvasGraphics08Rect;