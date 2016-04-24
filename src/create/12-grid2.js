import Grid from 'lazer/create/Grid.js';
import Canvas from 'lazer/canvas/Canvas.js';
import AddToDOM from 'lazer/dom/AddToDOM.js';

export default class CanvasGraphics {

    constructor () {

        //  With alternate false you get vertical strips

        let canvas = Grid({ alternate: false });

        AddToDOM(canvas, 'game');

    }

}

new CanvasGraphics();
