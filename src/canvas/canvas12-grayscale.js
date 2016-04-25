import { Canvas, GetContext, effects } from 'lazer/canvas';
import { AddToDOM } from 'lazer/dom';
import { Loader } from 'lazer/loader';

const { Grayscale } = effects;

class Canvas12 {

    constructor () {

        this.canvas = Canvas(320, 200);

        AddToDOM(this.canvas, 'game');

        this.loader = new Loader();

        this.loader.path = './src/assets/';

        this.loader.image('agent-t-buggin-acf_logo').then((file) => this.loadComplete(file));

        this.loader.start();

    }

    loadComplete (file) {

        const ctx = GetContext(this.canvas);

        ctx.drawImage(file.data, 0, 0);

        // Grayscale(ctx);
        Grayscale(ctx, 0, 0, 160, 200);
        // Grayscale(ctx, 60, 0, 160, 200);
        // Grayscale(ctx, 160, 0, 160, 200);
        // Grayscale(ctx, 200, 100, 160, 200);

    }

}

const Canvas12GrayScale = () => {
    new Canvas12();
};

export default Canvas12GrayScale;