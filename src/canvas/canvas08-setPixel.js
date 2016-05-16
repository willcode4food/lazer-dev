import { Canvas , BackgroundColor, GetContext, pixels } from 'lazer/canvas';
import { AddToDOM } from 'lazer/dom';
import { Loader } from 'lazer/loader';

const { SetPixel } = pixels;

class Canvas08 {

	constructor () {

		this.canvas = Canvas(320, 200);

		AddToDOM(this.canvas, 'game');

		BackgroundColor(this.canvas, '#000000');

		this.loader = new Loader();

		this.loader.path = './src/assets/';

		this.loader.image('agent-t-buggin-acf_logo').then((file) => this.loadComplete(file));

		this.loader.start();

	}

	loadComplete (file) {

		//  Draw the image

		const ctx = GetContext(this.canvas);

		ctx.drawImage(file.data, 0, 0);

		//  Draws 4 purple pixels at 32x22

		SetPixel(ctx, 32, 22, 255, 0, 255);
		SetPixel(ctx, 33, 22, 255, 0, 255);
		SetPixel(ctx, 32, 23, 255, 0, 255);
		SetPixel(ctx, 33, 23, 255, 0, 255);

	}

}

const Canvas08SetPixel = () => {
	new Canvas08();
};

export default Canvas08SetPixel;