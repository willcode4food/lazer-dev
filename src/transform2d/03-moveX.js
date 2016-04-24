import Transform2D from 'lazer/components/Transform2D';
import MainLoop from 'lazer/system/MainLoop';
import Canvas from 'lazer/canvas/Canvas';
import GetContext from 'lazer/canvas/GetContext';
import AddToDOM from 'lazer/dom/AddToDOM';
import CLS from 'lazer/canvas/graphics/Clear';
import DrawImage from 'lazer/canvas/DrawImage';
import Loader from 'lazer/loader/Loader';

export default class TransformTest {

    constructor () {

        this.canvas = Canvas(800, 600);

        AddToDOM(this.canvas, 'game');

        this.ctx = GetContext(this.canvas);

        //  Sprite at 100x100
        this.sprite1 = new Transform2D({}, null, 100, 100);

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

        CLS(this.ctx, true, 50, 50, 100);

    }

    update (delta) {

        this.sprite1.x += 100 * this.loop.physicsStep;

        if (this.sprite1.x > 800)
        {
            this.sprite1.x = 0;
        }

    }

    draw (i) {

        // DrawImage(this.ctx, this.image, { x: this.sprite1.x, y: this.sprite1.y, anchorX: 0.5, anchorY: 0.5 });
        DrawImage(this.ctx, this.image, { x: this.sprite1.x, y: this.sprite1.y });

        //  interpolated
        // let tx = (this.px + (this.x1 - this.px) * i);
        // this.ctx.fillRect(tx, 200, 128, 128);

    }

}

new TransformTest();
