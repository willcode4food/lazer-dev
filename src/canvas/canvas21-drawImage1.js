import Canvas from 'lazer/canvas/Canvas';
import GetContext from 'lazer/canvas/GetContext';
import AddToDOM from 'lazer/dom/AddToDOM';
import Fill from 'lazer/canvas/graphics/Fill';
import DrawImage from 'lazer/canvas/DrawImage';
import Loader from 'lazer/loader/Loader';

export default class CanvasTest {

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

        //  Draw the image at 0x0 with no arguments at all
        DrawImage(ctx, file.data);

    }

}

new CanvasTest();
