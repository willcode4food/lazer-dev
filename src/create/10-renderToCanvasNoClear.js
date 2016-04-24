import RenderToCanvas from 'lazer/create/RenderToCanvas.js';
import Canvas from 'lazer/canvas/Canvas.js';
import GetContext from 'lazer/canvas/GetContext.js';
import AddToDOM from 'lazer/dom/AddToDOM.js';
import Line from 'lazer/canvas/graphics/LineStyle.js';
import FillGradient from 'lazer/canvas/graphics/FillGradient.js';
import Stroke from 'lazer/canvas/graphics/Stroke.js';
import Rectangle from 'lazer/canvas/graphics/Rectangle.js';
import LinearGradient, { addColor } from 'lazer/canvas/graphics/LinearGradient.js';

export default class CanvasGraphics {

    constructor () {

        this.canvas = Canvas(800, 256);
        this.ctx = GetContext(this.canvas);

        let p = LinearGradient(this.ctx, 0, 0, 0, 512, [ 0, '#ff00f0', 0.5, '#05fff0', 1, '#8000ff' ]);

        Line(this.ctx, 2);

        Rectangle(this.ctx, 0, 0, 800, 256);

        FillGradient(this.ctx, p);

        var data = [
            '...55.......',
            '.....5......',
            '...7888887..',
            '..788888887.',
            '..888088808.',
            '..888886666.',
            '..8888644444',
            '..8888645555',
            '888888644444',
            '88788776555.',
            '78788788876.',
            '56655677776.',
            '456777777654',
            '.4........4.'
        ];

        RenderToCanvas(data, { canvas: this.canvas, resizeCanvas: false, clear: false });

        AddToDOM(this.canvas, 'game');

    }

}

new CanvasGraphics();
