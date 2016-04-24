import Canvas from 'lazer/canvas/Canvas';
import GetContext from 'lazer/canvas/GetContext';
import Clear from 'lazer/canvas/graphics/Clear';
import AddToDOM from 'lazer/dom/AddToDOM';
import BackgroundColor from 'lazer/canvas/BackgroundColor';
import MainLoop from 'lazer/system/MainLoop';
import Starfield2D from 'lazer/fx/starfield/2d/Starfield2D';

export default class FX {

    constructor () {

        this.canvas = Canvas(800, 600);

        BackgroundColor(this.canvas, 'rgb(0, 0, 0)');

        AddToDOM(this.canvas, 'game');

        this.ctx = GetContext(this.canvas);

        this.ctx.fillStyle = '#ffffff';

        this.starfield = new Starfield2D(800, 600);

        this.starfield.addLayer({ qty: 200, speedX: -2.5 });
        this.starfield.addLayer({ qty: 200, speedX: -2.7 });
        this.starfield.addLayer({ qty: 200, speedX: -2.9 });

        this.i = 0;

        this.loop = new MainLoop(60);

        this.loop.begin = (t => this.begin(t));
        this.loop.update = (delta => this.update(delta));
        this.loop.draw = (t => this.draw(t));

        this.loop.start();

    }

    begin () {

        Clear(this.ctx);

    }

    update (delta) {

        this.starfield.update();

        this.starfield.speedY = Math.sin(this.i += 0.01) * 2;

    }

    draw (i) {

        this.starfield.render(i, (layer, x, y) => this.drawStar(layer, x, y));

    }

    drawStar (layer, x, y) {
        
        this.ctx.fillRect(x, y, 2, 2);

    }

}

new FX();
