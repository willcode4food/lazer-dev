import { Canvas, GetContext, imagedata } from 'lazer/canvas';
import { AddToDOM } from 'lazer/dom';
import { Loader } from 'lazer/loader';

const { GetImageData, GetBounds } = imagedata;

class Canvas19 {

    constructor () {

        this.canvas = Canvas(320, 200);

        AddToDOM(this.canvas, 'game');

        this.loader = new Loader();

        this.loader.path = './src/assets/';

        this.loader.image('agent-t-buggin-acf_logo').then((file) => this.loadComplete(file));

        this.loader.start();

    }

    loadComplete (file) {

        //  Draw the image

        const ctx = GetContext(this.canvas);

        ctx.drawImage(file.data, 0, 0);

        const imageData = GetImageData(ctx);

        const bounds = GetBounds(imageData);

        console.log(bounds);

        ctx.strokeStyle = '#ff00ff';
        ctx.strokeRect(bounds.x, bounds.y, bounds.width, bounds.height);

    }

}

const Canvas19GetBounds = () => {
    new Canvas19();
};

export default Canvas19GetBounds;