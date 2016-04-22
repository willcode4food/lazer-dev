import { Canvas, GetContext, effects } from 'lazer/canvas';
import { AddToDOM } from 'lazer/dom';
import { Loader } from 'lazer/loader';

const { Brightness } = effects;

export default class Canvas15Brightness {

    constructor () {

        this.canvas = Canvas(320, 200);

        AddToDOM(this.canvas, 'game');

        this.loader = new Loader();

        this.loader.path = 'assets/';

        this.loader.image('agent-t-buggin-acf_logo').then((file) => this.loadComplete(file));

        this.loader.start();

    }

    loadComplete (file) {

        const ctx = GetContext(this.canvas);

        ctx.drawImage(file.data, 0, 0);

        // Brightness(100, ctx);
        Brightness(100, ctx, 0, 0, 160, 200);
        // Brightness(100, ctx, 60, 0, 160, 200);
        // Brightness(100, ctx, 160, 0, 160, 200);
        // Brightness(100, ctx, 200, 100, 160, 200);

    }

}