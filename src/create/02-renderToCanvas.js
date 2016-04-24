import { PALETTE_ARNE } from 'lazer/create/palettes/Arne16.js';
import RenderToCanvas from 'lazer/create/RenderToCanvas.js';
import Canvas from 'lazer/canvas/Canvas.js';
import AddToDOM from 'lazer/dom/AddToDOM.js';
import BackgroundColor from 'lazer/canvas/BackgroundColor.js';

export default class CanvasGraphics {

    constructor () {

        //  Render the sprite data to an existing canvas and DON'T resize it

        this.canvas = Canvas(800, 300);

        BackgroundColor(this.canvas, 'rgb(0, 0, 20)');

        AddToDOM(this.canvas, 'game');

        let data = [
            ' 333 ',
            ' 777 ',
            'E333E',
            ' 333 ',
            ' 3 3 '
        ];

        RenderToCanvas(data, { canvas: this.canvas, palette: PALETTE_ARNE, resizeCanvas: false });

    }

}

new CanvasGraphics();
