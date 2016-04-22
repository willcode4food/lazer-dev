import { Canvas, GetContext, DrawImage, ImageRendering, Smoothing } from 'lazer/canvas';
import { AddToDOM } from 'lazer/dom';
import { Loader } from 'lazer/loader';
import { Fill } from 'lazer/graphics';

export default class Canvas21DrawImage3 {

    constructor () {

        this.canvas = Canvas(800, 600);

        AddToDOM(this.canvas, 'game');

        ImageRendering.crisp(this.canvas);

        this.loader = new Loader();

        this.loader.path = 'assets/';

        this.loader.image('mushroom2').then((file) => this.loadComplete(file));

        this.loader.start();

    }

    loadComplete (file) {

        const ctx = GetContext(this.canvas);

        Smoothing.disable(ctx);

        Fill(ctx, 120, 0, 120);

        DrawImage(ctx, file.data, { x: 200, y: 200, scaleX: 4, scaleY: 4 });

    }

}