import Canvas from 'lazer/canvas/Canvas';
import GetContext from 'lazer/canvas/GetContext';
import AddToDOM from 'lazer/dom/AddToDOM';
import GetImageData from 'lazer/canvas/imagedata/GetImageData';
import PutImageData from 'lazer/canvas/imagedata/PutImageData';
import EdgeDetect from 'lazer/canvas/filters/EdgeDetect';
import Loader from 'lazer/loader/Loader';

export default class CanvasTest {

    constructor () {

        this.canvas = Canvas(512, 256);

        AddToDOM(this.canvas, 'game');

        this.loader = new Loader();

        this.loader.path = 'assets/';

        this.loader.image('jelly').then((file) => this.loadComplete(file));

        this.loader.start();

    }

    loadComplete (file) {

        const ctx = GetContext(this.canvas);

        ctx.drawImage(file.data, 0, 0);

        const imageData = GetImageData(ctx, 0, 0, 256, 256);

        EdgeDetect(imageData);

        PutImageData(ctx, imageData, 256, 0);

    }

}

new CanvasTest();
