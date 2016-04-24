import MasterClock from 'lazer/time/MasterClock';
import Canvas from 'lazer/canvas/Canvas';
import AddToDOM from 'lazer/dom/AddToDOM';
import WebGLBatchedPointRenderer from 'lazer/renderers/batch_point/WebGLBatchedPoint';
import Vec2 from 'lazer/math/vector/Vec2';

export default class PointTest {

    constructor () {

        this.canvas = Canvas(800, 600);

        AddToDOM(this.canvas, 'game');

        this.renderer = new WebGLBatchedPointRenderer(this.canvas);

        this.pos = new Vec2(100, 100);

        this.velocity = new Vec2();
        this.velocity.length = 4; // speed
        this.velocity.rotate(Math.PI / 4);

        this.pointIndex = this.renderer.addPoint(this.pos.x, this.pos.y);

        this.master = new MasterClock();

        this.master.init(() => this.update());

    }

    update () {

        this.pos.add(this.velocity);

        if (this.pos.x > 800)
        {
            this.pos.x = 0;
        }

        if (this.pos.y > 600)
        {
            this.pos.y = 0;
        }

        this.renderer.updatePoint(this.pointIndex, this.pos.x, this.pos.y);

        this.renderer.bufferDynamic();
        this.renderer.render();

    }

}

new PointTest();
