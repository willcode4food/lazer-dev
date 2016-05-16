import { Canvas, GetContext, imagedata } from 'lazer/canvas';
import { AddToDOM } from 'lazer/dom';
import { Loader } from 'lazer/loader';
const  { GetImageData, GetPixels3x3 } = imagedata;

class Canvas22 {
	constructor () {

		this.canvas = Canvas(512, 256);

		AddToDOM(this.canvas, 'game');

		this.loader = new Loader();

		this.loader.path = './src/assets/';

		this.loader.image('jelly').then((file) => this.loadComplete(file));

		this.loader.start();

	}

	loadComplete (file) {

		const ctx = GetContext(this.canvas);

		ctx.drawImage(file.data, 0, 0);

		const imageData = GetImageData(ctx, 0, 0, 256, 256);

		let pixels = GetPixels3x3(imageData, 32, 32);

		console.log(pixels.length);
		console.log(pixels);

	}

}

const Canvas22GetPixels3x3 = () => {
	new Canvas22();
};

export default Canvas22GetPixels3x3;