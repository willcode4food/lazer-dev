import { Canvas, GetContext, DrawImage, ImageRendering, Smoothing } from 'lazer/canvas';
import { AddToDOM } from 'lazer/dom';
import { Loader } from 'lazer/loader';
import { Fill } from 'lazer/graphics';

export default class Canvas21DrawImage7 {

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

        DrawImage(ctx, file.data, {
            x: 200, y: 200,
            scaleX: 2, scaleY: 2
        });

        DrawImage(ctx, file.data, {
            x: 350, y: 200,
            scaleX: 2, scaleY: 2,
            blendMode: 'lighter'
        });

        DrawImage(ctx, file.data, {
            x: 500, y: 200,
            scaleX: 2, scaleY: 2,
            blendMode: 'overlay'
        });

    }

}

new CanvasTest();
