import Transform from 'lazer/math/transform/2d/basic/Transform';
import SetTransformToContext from 'lazer/math/transform/2d/SetTransformToContext';
import MainLoop from 'lazer/system/MainLoop';
import Canvas from 'lazer/canvas/Canvas';
import GetContext from 'lazer/canvas/GetContext';
import AddToDOM from 'lazer/dom/AddToDOM';
import CLS from 'lazer/canvas/graphics/Clear';
import Loader from 'lazer/loader/Loader';
import ResetTransform from 'lazer/canvas/ResetTransform';

class TransformTest {

    constructor () {

        this.canvas = Canvas(800, 600);
        this.ctx = GetContext(this.canvas);

        AddToDOM(this.canvas, 'game');

        //  Sprite
        this.sprite = {
            name: 'Bob',
            transform: new Transform()
        };

        //  Inject the Transform properties directly into the Sprite object
        this.sprite.transform.addProperties(this.sprite);

        //  Now we can do things like this ...
        this.sprite.x = 400;
        this.sprite.y = 300;

        this.sprite.rotationAnchor.set(0.5);

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

        ResetTransform(this.ctx);

        CLS(this.ctx, true, 50, 50, 100);

    }

    update (delta) {

        this.sprite.rotation += 0.05;

    }

    draw (i) {

        SetTransformToContext(this.sprite.transform, this.ctx);

        //  64 = image frame dimensions
        let dx = this.sprite.rotationAnchor.x * -64;
        let dy = this.sprite.rotationAnchor.y * -64;

        this.ctx.drawImage(this.image, dx, dy);

    }

}

new TransformTest();
