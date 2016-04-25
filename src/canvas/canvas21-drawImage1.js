import { Canvas , GetContext, graphics } from 'lazer/canvas';
import { AddToDOM } from 'lazer/dom';
import { DrawImage } from 'lazer/canvas';
import { Loader } from 'lazer/loader';

const { Fill } = graphics;

class Canvas21_1 {

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

        //  Draw the image at 0x0 with no arguments at all
        DrawImage(ctx, file.data);

    }

}

const Canvas21DrawImage1 = () => {
    new Canvas21_1();
};

export default Canvas21DrawImage1;

