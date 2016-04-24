import { PALETTE_MSX } from 'lazer/create/palettes/MSX.js';
import Canvas from 'lazer/canvas/Canvas.js';
import AddToDOM from 'lazer/dom/AddToDOM.js';
import GetContext from 'lazer/canvas/GetContext.js';

export default class CanvasGraphics {

    constructor () {

        this.canvas = Canvas(512, 96);

        AddToDOM(this.canvas, 'game');

        this.ctx = GetContext(this.canvas);

        let i = 0;

        for (let p of PALETTE_MSX)
        {
            this.ctx.fillStyle = p;
            this.ctx.fillRect(i, 0, 32, 96);
            i += 32;
        }

    }

}

new CanvasGraphics();
