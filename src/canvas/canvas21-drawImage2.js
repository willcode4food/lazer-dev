import { Canvas, GetContext, DrawImage } from 'lazer/canvas';
import { AddToDOM } from 'lazer/dom';
import { Loader } from 'lazer/loader';
import { Fill } from 'lazer/graphics';

export default class Canvas21DrawImage2 {

    constructor () {

        this.canvas = Canvas(800, 600);

        AddToDOM(this.canvas, 'game');

        this.loader = new Loader();

        this.loader.path = 'assets/';

        this.loader.image('mushroom2').then((file) => this.loadComplete(file));

        this.loader.start();

    }

    loadComplete (file) {

        const ctx = GetContext(this.canvas);

        Fill(ctx, 120, 0, 120);

        //  Draw the image at 400x300
        // DrawImage(ctx, file.data, { x: 400, y: 300 });

        //  Draw the image at 400x300 centered (anchor 0.5)
        DrawImage(ctx, file.data, { x: 400, y: 300, anchorX: 0.5, anchorY: 0.5 });

    }

}