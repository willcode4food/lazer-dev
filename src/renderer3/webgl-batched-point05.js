import MasterClock from 'lazer/time/MasterClock';
import Canvas from 'lazer/canvas/Canvas';
import AddToDOM from 'lazer/dom/AddToDOM';
import WebGLBatchedPointRenderer from 'lazer/renderers/batch_point/WebGLBatchedPoint';
import Vec2 from 'lazer/math/vector/vec2/Vec2';
import Vec2Rotate from 'lazer/math/vector/common/Rotate';
import DegToRad from 'lazer/math/DegToRad';
import Between from 'lazer/math/Between';

export default class Particle {

    constructor (renderer) {

        this.pos = new Vec2(0, 0);

        this.velocity = new Vec2();
        this.velocity.length = 0.1 + Math.random();

        const a = 0 + (Math.random() * 90);

        Vec2Rotate(this.velocity, DegToRad(a));

        this.renderer = renderer;

    }

    update () {

        this.pos.add(this.velocity);

        if (this.pos.x < -800 || this.pos.x > 1600)
        {
            this.velocity.x *= -1;
        }

        if (this.pos.y < -600 || this.pos.y > 1200)
        {
            this.velocity.y *= -1;
        }

        this.renderer.addPoint(this.pos.x, this.pos.y);

    }

}

export default class PointTest {

    constructor () {

        this.canvas = Canvas(800, 600);

        AddToDOM(this.canvas, 'game');

        this.renderer = new WebGLBatchedPointRenderer(this.canvas);

        this.particles = [];

        for (let i = 0; i < 1000; i++)
        {
            this.particles.push(new Particle(this.renderer));
        }

        this.master = new MasterClock();

        this.master.init(() => this.update());

    }

    update () {

        this.renderer.reset();

        for (let i = 0; i < 1000; i++)
        {
            this.particles[i].update();
            this.step(this.particles[i]);
        }

        this.renderer.bufferDynamic();
        this.renderer.render();
        // this.renderer.renderLines();

    }

    step (particle) {

        var x = 400 - particle.pos.x;
        var y = 300 - particle.pos.y;
        var dSq = x * x + y * y;

        if (dSq === 0)
        {
            return;
        }

        var d = Math.sqrt(dSq);

        if (dSq < 50000)
        {
            dSq = 50000;
        }

        var factor = (120 * Math.min(16.7, this.master.elapsed)) / (dSq * d);

        particle.velocity.x += x * factor;
        particle.velocity.y += y * factor;

    }

}

new PointTest();
