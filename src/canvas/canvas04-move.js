import { Canvas , BackgroundColor, GetContext, effects } from 'lazer/canvas';
import { AddToDOM } from 'lazer/dom';
import { Loader } from 'lazer/loader';

const { Move } = effects;

class Canvas04 {

	constructor () {

		this.canvas = Canvas(320, 200);

		this.pic = null;

		BackgroundColor(this.canvas, 'rgb(200, 50, 50)');
		AddToDOM(this.canvas, 'game');

		this.loader = new Loader();

		this.loader.path = './src/assets/';

		this.loader.image('agent-t-buggin-acf_logo').then((file) => this.loadComplete(file));

		this.loader.start();

	}

	loadComplete (file) {

		this.pic = file.data;

		//  Draw the image in its initial state
		GetContext(this.canvas).drawImage(this.pic, 0, 0);

		// Move(this.canvas, 100, 100, true, true);
		// Move(this.canvas, 100, 100, true, false);
		// Move(this.canvas, -100, 100, false, true);
		Move(this.canvas, 64, 64);

	}

}
const Canvas04Move = () => {
	new Canvas04();
};

export default Canvas04Move;