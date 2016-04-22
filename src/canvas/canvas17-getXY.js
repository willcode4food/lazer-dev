import { Canvas, GetContext, imagedata } from 'lazer/canvas';
import { AddToDOM } from 'lazer/dom';
import { Loader } from 'lazer/loader';

const { GetImageData, GetXY } = imagedata;

export default class Canvas17GetXY {

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

        console.log(imageData.width, 'x', imageData.height);

        console.log('Index 0', GetXY(imageData, 0)); // 0x0
        console.log('Index 4', GetXY(imageData, 4)); // 1x0
        console.log('Index 40', GetXY(imageData, 40)); // 10x0
        console.log('Index 1280', GetXY(imageData, 1280)); // 0x1
        console.log('Index 41088', GetXY(imageData, 41088)); // 32x32
        console.log('Index 254888', GetXY(imageData, 254888)); // 42x199
        console.log('Index 4148', GetXY(imageData, 4148)); // 77x3
        console.log('Index 227876', GetXY(imageData, 227876)); // 9x178
        console.log('Index 255996', GetXY(imageData, 255996)); // 319x199

    }

}