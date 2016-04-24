import Transform2D from 'lazer/components/Transform2D';
import MainLoop from 'lazer/system/MainLoop';
import Canvas from 'lazer/canvas/Canvas';
import GetContext from 'lazer/canvas/GetContext';
import AddToDOM from 'lazer/dom/AddToDOM';
import CLS from 'lazer/canvas/graphics/Clear';
import DrawImage from 'lazer/canvas/DrawImage';
import DrawImageFromMatrix from 'lazer/canvas/DrawImageFromMatrix';
import SetTransform from 'lazer/canvas/SetTransform';
import SetTransformFromMatrix from 'lazer/canvas/SetTransformFromMatrix';
import Loader from 'lazer/loader/Loader';

export default class TransformTest {

    constructor () {

        this.canvas = Canvas(800, 600);

        AddToDOM(this.canvas, 'game');

        this.ctx = GetContext(this.canvas);

        this.sprite1 = new Transform2D({}, null, 400, 300);

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

        this.sprite1.scaleY += 0.1;

        if (this.sprite1.scaleY >= 10)
        {
            this.sprite1.scaleY = 1;
        }

    }

    draw (i) {

        SetTransformFromMatrix(this.ctx, this.sprite1._local);
        DrawImageFromMatrix(this.ctx, this.image, this.sprite1._local);

    }

}

new TransformTest();
