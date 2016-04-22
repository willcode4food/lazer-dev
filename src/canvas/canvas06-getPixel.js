import { Canvas , BackgroundColor, GetContext, pixels } from 'lazer/canvas';
import { AddToDOM } from 'lazer/dom';
import { Loader } from 'lazer/loader';

const { GetPixel } = pixels;


export default class Canvas06GetPixel {

    constructor () {

        this.canvas = Canvas(320, 200);

        AddToDOM(this.canvas, 'game');

        this.loader = new Loader();

        this.loader.path = 'assets/';

        this.loader.image('agent-t-buggin-acf_logo').then((file) => this.loadComplete(file));

        this.loader.start();

    }

    loadComplete (file) {

        //  Draw the image

        const ctx = GetContext(this.canvas);

        ctx.drawImage(file.data, 0, 0);

        //  Get a pixel from 100x80 from the canvas context
        const pixel = GetPixel(ctx, 100, 80);

        console.log(pixel);

        //  Now let's set the rgb value we got as the canvas background color
        const bgc = `rgba(${pixel.r}, ${pixel.g}, ${pixel.b}, ${255 / pixel.a})`;

        BackgroundColor(this.canvas, bgc);

    }

}
