import BaseTransform from 'lazer/math/transform/2d/standard/BaseTransform';
import SetTransformToContext from 'lazer/math/transform/2d/SetTransformToContext';
import MainLoop from 'lazer/system/MainLoop';
import Canvas from 'lazer/canvas/Canvas';
import GetContext from 'lazer/canvas/GetContext';
import AddToDOM from 'lazer/dom/AddToDOM';
import CLS from 'lazer/canvas/graphics/Clear';
import Loader from 'lazer/loader/Loader';
import ResetTransform from 'lazer/canvas/ResetTransform';
import Between from 'lazer/math/Between';

class Sprite extends BaseTransform {

    constructor (image, x, y) {

        super(x, y);

        this.texture = { image: image, width: image.width, height: image.height };

    }

    render (ctx, i) {

        SetTransformToContext(this.transform, ctx, i);

        let dx = this.rotationAnchor.x * -this.texture.width;
        let dy = this.rotationAnchor.y * -this.texture.height;

        ctx.drawImage(this.texture.image, dx, dy);

    }

}

class TransformTest {

    constructor () {

        this.canvas = Canvas(800, 600);
        this.ctx = GetContext(this.canvas);

        AddToDOM(this.canvas, 'game');

        //  Loader
        this.image = null;
        this.loader = new Loader();
        this.loader.path = 'assets/';
        this.loader.image('arrow').then((file) => this.loadComplete(file));
        this.loader.start();

    }

    loadComplete (file) {

        this.image = file.data;

        this.arrow1 = new Sprite(this.image, 200, 150);
        this.arrow1.pivot.x = 100;

        this.arrow2 = new Sprite(this.image, 600, 150);
        this.arrow2.pivot.y = 100;

        this.arrow3 = new Sprite(this.image, 200, 450);
        this.arrow3.pivot.x = 100;
        this.arrow3.pivot.y = 100;

        this.arrow4 = new Sprite(this.image, 600, 450);
        this.arrow4.pivot.x = 100;
        this.arrow4.rotationAnchor.set(0.5);

        this.loop = new MainLoop(60);

        this.loop.begin = (t => this.begin(t));
        this.loop.update = (delta => this.update(delta));
        this.loop.draw = (t => this.draw(t));

        this.loop.start();

    }

    begin () {

        ResetTransform(this.ctx);

        CLS(this.ctx, true, 62, 95, 150);

    }

    update (delta) {

        this.arrow1.rotation += 0.05;
        this.arrow2.rotation += 0.05;
        this.arrow3.rotation += 0.05;
        this.arrow4.rotation += 0.05;

    }

    draw (i) {

        //  Render the pivot points
        this.ctx.fillStyle = 'rgb(255,255,0)';

        this.ctx.fillRect(this.arrow1.x, this.arrow1.y, 4, 4);
        this.ctx.fillRect(this.arrow2.x, this.arrow2.y, 4, 4);
        this.ctx.fillRect(this.arrow3.x, this.arrow3.y, 4, 4);
        this.ctx.fillRect(this.arrow4.x, this.arrow4.y, 4, 4);

        //  Render the arrows
        this.arrow1.render(this.ctx, i);
        this.arrow2.render(this.ctx, i);
        this.arrow3.render(this.ctx, i);
        this.arrow4.render(this.ctx, i);

    }

}

new TransformTest();
