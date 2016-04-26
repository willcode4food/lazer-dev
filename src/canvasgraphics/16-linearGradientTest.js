import { Canvas, graphics } from 'lazer/canvas';
import { AddToDOM } from 'lazer/dom';

const { FillGradient, Rectangle, LinearGradient } = graphics;

class CanvasGraphics16 {

    constructor () {

        this.canvas1 = Canvas(256, 256);
        this.ctx1 = this.canvas1.getContext('2d');
        let p1 = LinearGradient(this.ctx1, 0, 0, 256, 256, [ 0, '#ff00f0', 0.5, '#05fff0', 1, '#8000ff' ]);

        this.canvas1 = null;
        this.ctx1 = null;

        this.canvas2 = Canvas(256, 256);
        AddToDOM(this.canvas2, 'game');
        this.ctx2 = this.canvas2.getContext('2d');
        let p2 = LinearGradient(this.ctx2, 0, 0, 256, 256, [ 0, '#ee0040', 0.5, '#fff520', 1, '#45a08f' ]);
        Rectangle(this.ctx2, 0, 0, 256, 256);
        FillGradient(this.ctx2, p1);

    }

}

const CanvasGraphics16LinearGradientTest = () => {
    new CanvasGraphics16();
};

export default CanvasGraphics16LinearGradientTest;