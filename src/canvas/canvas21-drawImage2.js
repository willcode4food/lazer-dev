import { Canvas, GetContext, DrawImage, graphics } from 'lazer/canvas';
import { AddToDOM } from 'lazer/dom';
import { Loader } from 'lazer/loader';

const { Fill } = graphics;

class Canvas21_2 {

	constructor () {

		this.canvas = Canvas(800, 600);

		AddToDOM(this.canvas, 'game');

		this.loader = new Loader();

		this.loader.path = './src/assets/';

		this.loader.image('mushroom2').then((file) => this.loadComplete(file));

		this.loader.start();

	}

	loadComplete (file) {

		const ctx = GetContext(this.canvas);

		Fill(ctx, 120, 0, 120);

		//  Draw the image at 400x300
		// DrawImage(ctx, file.data, { x: 400, y: 300 });

		//  Draw the image at 400x300 centered (anchor 0.5)
		DrawImage(ctx, file.data, { x: 400, y: 300, anchorX: 0.5, anchorY: 0.5 });

	}

}

const Canvas21DrawImage2 = () => {
	new Canvas21_2();
};

export default Canvas21DrawImage2;