import Canvas from 'lazer/canvas/Canvas';
import GetContext from 'lazer/canvas/GetContext';
import AddToDOM from 'lazer/dom/AddToDOM';
import GetImageData from 'lazer/canvas/imagedata/GetImageData';
import PutImageData from 'lazer/canvas/imagedata/PutImageData';
import FlipHorizontal from 'lazer/canvas/filters/FlipHorizontal';
import Loader from 'lazer/loader/Loader';

export default class CanvasTest {

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

        FlipHorizontal(imageData);

        ctx.clearRect(0, 0, 320, 200);

        PutImageData(ctx, imageData);

    }

}

new CanvasTest();
