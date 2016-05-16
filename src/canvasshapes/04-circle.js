import { MainLoop } from 'lazer/system';
import { Canvas, shapes, GetContext, ResetTransform, graphics } from 'lazer/canvas';
import { AddToDOM } from 'lazer/dom';

const { Circle } = shapes;
const { Clear } = graphics;

class CanvasShapes04 {

	constructor () {

		this.canvas = Canvas(800, 600);

		AddToDOM(this.canvas, 'game');

		this.ctx = GetContext(this.canvas);

		this.circ = new Circle({ x: 400, y: 300, radius: 128, fill: 'rgba(255, 0, 255, 1)', stroke: 'rgba(0, 0, 0, 1)', lineWidth: 8 });

		this.loop = new MainLoop(60);

		this.loop.begin = (t => this.begin(t));
		this.loop.update = (delta => this.update(delta));
		this.loop.draw = (t => this.draw(t));

		this.loop.start();

	}

	begin () {

		ResetTransform(this.ctx);

		Clear(this.ctx, true, 200, 200, 255, 1);

		// this.circ.x++;

	}

	update (delta) {

	}

	draw (i) {

		this.circ.draw(this.ctx, i);

	}

}

const CanvasShapes04Circle = () => {
	new CanvasShapes04();
};

export default CanvasShapes04Circle;