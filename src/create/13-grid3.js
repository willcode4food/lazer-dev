import Grid from 'lazer/create/Grid.js';
import Canvas from 'lazer/canvas/Canvas.js';
import AddToDOM from 'lazer/dom/AddToDOM.js';

export default class CanvasGraphics {

    constructor () {

        //  New size, including slightly cut-off height

        let canvas = Grid({ width: 512, height: 300 });

        AddToDOM(canvas, 'game');

    }

}

new CanvasGraphics();
