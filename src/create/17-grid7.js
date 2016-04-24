import Grid from 'lazer/create/Grid.js';
import Canvas from 'lazer/canvas/Canvas.js';
import AddToDOM from 'lazer/dom/AddToDOM.js';

export default class CanvasGraphics {

    constructor () {

        //  If you set a color to undefined, null or false it will not render that cell, leaving
        //  it transparent

        let canvas = Grid({ color1: '#3566FF', color2: null });

        AddToDOM(canvas, 'game');

    }

}

new CanvasGraphics();
