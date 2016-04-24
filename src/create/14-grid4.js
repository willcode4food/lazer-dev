import Grid from 'lazer/create/Grid.js';
import Canvas from 'lazer/canvas/Canvas.js';
import AddToDOM from 'lazer/dom/AddToDOM.js';

export default class CanvasGraphics {

    constructor () {

        //  If you just specify the width, the height is set to match it.
        //  Here we use new grid colors too.

        let canvas = Grid({ width: 512, color1: '#3566FF', color2: '#6DC1FF' });

        AddToDOM(canvas, 'game');

    }

}

new CanvasGraphics();
