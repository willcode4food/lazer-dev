import { Canvas, GetContext, DrawImage, ImageRendering, Smoothing, graphics } from 'lazer/canvas';
import { AddToDOM } from 'lazer/dom';
import { Loader } from 'lazer/loader';
import { DegToRad } from 'lazer/math';

const { Fill } = graphics;

class Canvas21_6 {

	constructor () {

		this.canvas = Canvas(800, 600);

		AddToDOM(this.canvas, 'game');

		ImageRendering.crisp(this.canvas);

		this.loader = new Loader();

		this.loader.path = './src/assets/';

		this.loader.image('mushroom2').then((file) => this.loadComplete(file));

		this.loader.start();

	}

	loadComplete (file) {

		const ctx = GetContext(this.canvas);

		Smoothing.disable(ctx);

		Fill(ctx, 120, 0, 120);

		DrawImage(ctx, file.data, {
			x: 400, y: 300,
			srcWidth: 32,
			anchorX: 0.5, anchorY: 0.5,
			scaleX: 4, scaleY: 4,
			rotate: DegToRad(45)
		});

	}
}

const Canvas21DrawImage6 = () => {
	new Canvas21_6();
};

export default Canvas21DrawImage6;