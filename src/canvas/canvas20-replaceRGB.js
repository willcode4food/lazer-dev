import { Canvas, GetContext, imagedata } from 'lazer/canvas';
import { AddToDOM } from 'lazer/dom';
import { Loader } from 'lazer/loader';

const { ReplaceRGB } = imagedata;


export default class Canvas20ReplaceRGB {

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

        ReplaceRGB(ctx, 65, 95, 12, 255, 0, 255);
        // ReplaceRGB(ctx, 65, 95, 12, 255, 0, 255, 0, 0, 160, 200);

    }

}
