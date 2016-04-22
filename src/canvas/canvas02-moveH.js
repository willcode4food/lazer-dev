import { Canvas , BackgroundColor, GetContext, effects } from 'lazer/canvas';
import { AddToDOM } from 'lazer/dom';
import { Loader } from 'lazer/loader';

const { MoveHorizontal } = effects;

export default class Canvas02MoveH {

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

        //  Move it left by 100px
        // MoveHorizontal(this.canvas, -100, false);
        MoveHorizontal(this.canvas, -100, true);

        //  Move it right by 100px
        // MoveHorizontal(this.canvas, 100, false);
        // MoveHorizontal(this.canvas, 100, true);

    }

}