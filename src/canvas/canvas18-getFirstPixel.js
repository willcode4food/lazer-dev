import { Canvas, GetContext, imagedata } from 'lazer/canvas';
import { AddToDOM } from 'lazer/dom';
import { Loader } from 'lazer/loader';

const { GetImageData, GetFirstPixel } = imagedata;

export default class Canvas18GetFirstPixel {

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

        const imageData = GetImageData(ctx);

        //  Scan from Top to Bottom (Left to Right)
        console.log(GetFirstPixel(imageData, 0)); // 9x23

        //  Scan from Bottom to Top (Right to Left)
        console.log(GetFirstPixel(imageData, 1)); // 180x176

        //  Scan from Left to Right
        console.log(GetFirstPixel(imageData, 2)); // 9x23

        //  Scan from Right to Left
        console.log(GetFirstPixel(imageData, 3)); // 310x23

    }

}