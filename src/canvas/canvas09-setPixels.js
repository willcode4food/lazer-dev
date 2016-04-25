import { Canvas , BackgroundColor, GetContext, pixels, imagedata } from 'lazer/canvas';
import { AddToDOM } from 'lazer/dom';
import { Loader } from 'lazer/loader';

const { SetPixels } = pixels;
const { GetImageData } = imagedata;

class Canvas09 {

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

        //  Get the ImageData
        const imageData = GetImageData(ctx);

        //  Expects the ImageData to contain the full canvas (maybe optimise?)
        SetPixels.load(ctx, imageData);

        //  Draw 3 diagonal lines
        for (let x = 0; x < 64; x++)
        {
            SetPixels.set(x, x, 255);
            SetPixels.set(x + 1, x, 0, 255);
            SetPixels.set(x + 2, x, 0, 0, 255);
        }

        //  Write it back to the Canvas context
        SetPixels.write();

    }

}

const Canvas09SetPixels = () => {
    new Canvas09();
};

export default Canvas09SetPixels;