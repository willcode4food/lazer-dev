import { Canvas, GetContext, BackgroundColor, AddToDOM, Move, Loader } from 'lazer';

class Canvas04Move {

    constructor () {

        this.canvas = Canvas(320, 200);

        this.pic = null;

        BackgroundColor(this.canvas, 'rgb(200, 50, 50)');
        AddToDOM(this.canvas, 'game');

        this.loader = new Loader();

        this.loader.path = 'assets/';

        this.loader.image('agent-t-buggin-acf_logo').then((file) => this.loadComplete(file));

        this.loader.start();

    }

    loadComplete (file) {

        this.pic = file.data;

        //  Draw the image in its initial state
        GetContext(this.canvas).drawImage(this.pic, 0, 0);

        // Move(this.canvas, 100, 100, true, true);
        // Move(this.canvas, 100, 100, true, false);
        // Move(this.canvas, -100, 100, false, true);
        Move(this.canvas, 64, 64);

    }

}

// new CanvasTest();
export default Canvas04Move