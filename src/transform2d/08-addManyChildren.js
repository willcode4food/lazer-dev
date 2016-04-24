import Transform2D from 'lazer/components/Transform2D';
import MainLoop from 'lazer/system/MainLoop';
import Between from 'lazer/math/Between';
import Canvas from 'lazer/canvas/Canvas';
import GetContext from 'lazer/canvas/GetContext';
import AddToDOM from 'lazer/dom/AddToDOM';
import CLS from 'lazer/canvas/graphics/Clear';
import DrawImageFromMatrix from 'lazer/canvas/DrawImageFromMatrix';
import SetTransform from 'lazer/canvas/SetTransform';
import SetTransformFromMatrix from 'lazer/canvas/SetTransformFromMatrix';
import Loader from 'lazer/loader/Loader';

export default class TransformTest {

    constructor () {

        this.canvas = Canvas(800, 600);
        this.canvas.addEventListener('mousedown', e => this.update(e), true);

        AddToDOM(this.canvas, 'game');

        this.ctx = GetContext(this.canvas);
        this.ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        this.ctx.font = '14px Courier';

        this.sprites1 = new Set();
        this.sprites2 = new Set();

        //  Our root transform, right in the middle of the screen
        this.root = new Transform2D({}, null, 400, 300);

        this.sprites1.add(this.root);

        //  And now let's create a bunch of transforms around it
        for (let i = 0; i < 8; i++)
        {
            let child = new Transform2D({}, this.root, -200 + (64 * i), -100);
            this.sprites1.add(child);
        }

        for (let i = 0; i < 8; i++)
        {
            let child = new Transform2D({}, this.root, -200 + (64 * i), -170);
            this.sprites2.add(child);
        }

        //  Loader
        this.image = null;
        this.loader = new Loader();
        this.loader.path = 'assets/';
        this.loader.image('mushroom2').then((file) => this.loadComplete(file));
        this.loader.start();

    }

    loadComplete (file) {

        this.image = file.data;

        this.loop = new MainLoop(60);

        this.loop.begin = (t => this.begin(t));
        this.loop.update = (delta => this.update(delta));
        this.loop.draw = (t => this.draw(t));

        this.loop.start();

    }

    begin () {

        SetTransform(this.ctx);
        CLS(this.ctx, true, 50, 50, 100);

    }

    update (delta) {

        //  Rotate the root
        // this.root.rotation += 0.02;

        this.root.x += 100 * this.loop.physicsStep;

        if (this.root.x > 1000)
        {
            this.root.x = -400;
            // this.root.ix = -200;
        }

    }

    draw (i) {

        this.i = i;
        this.ctx.fillText('i: ' + i, 16, 30);

        for (let sprite of this.sprites1)
        {
            let mat33 = sprite.draw(i);

            SetTransformFromMatrix(this.ctx, mat33);
            DrawImageFromMatrix(this.ctx, this.image, mat33);
        }

        for (let sprite of this.sprites2)
        {
            SetTransformFromMatrix(this.ctx, sprite._local);
            DrawImageFromMatrix(this.ctx, this.image, sprite._local);
        }

    }

}

new TransformTest();
