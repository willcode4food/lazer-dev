import { Canvas, BackgroundColor, graphics } from 'lazer/canvas';
import { AddToDOM } from 'lazer/dom';

const { LineStyle, FillGradient, Rectangle, RadialGradient, addColor } = graphics;
const Line = LineStyle;

class CanvasGraphics15 {

	constructor () {

		this.canvas = Canvas(512, 512);

		BackgroundColor(this.canvas, 'rgb(0, 0, 20)');

		AddToDOM(this.canvas, 'game');

		this.ctx = this.canvas.getContext('2d');

		//  method 1
		let p = RadialGradient(this.ctx, 256, 256, 300, 256, 256, 50);
		addColor(p, 0, '#ff0000');
		addColor(p, 0.5, '#ffff00');
		addColor(p, 1, '#ff00ff');

		//  method 2
		// let p = RadialGradient(this.ctx, 256, 256, 300, 256, 256, 50, 0, '#ff0000', 0.5, '#00ff00', 1, '#0000ff');

		//  method 3
		// let p = RadialGradient(this.ctx, 256, 256, 300, 256, 256, 50, [ 0, '#ff00f0', 0.5, '#05fff0', 1, '#8000ff' ]);

		Line(this.ctx, 2);

		Rectangle(this.ctx, 0, 0, 512, 512);

		FillGradient(this.ctx, p);

	}

}

const CanvasGraphics15RadialGradient = () => {
	new CanvasGraphics15();
};

export default CanvasGraphics15RadialGradient;