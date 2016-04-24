import Canvas from 'lazer/canvas/Canvas';
import GetContext from 'lazer/canvas/GetContext';
import Clear from 'lazer/canvas/graphics/Clear';
import AddToDOM from 'lazer/dom/AddToDOM';
import BackgroundColor from 'lazer/canvas/BackgroundColor';
import MainLoop from 'lazer/system/MainLoop';
import Starfield2DDot from 'lazer/fx/starfield/2d/Starfield2DDot';

export default class FX {

    constructor () {

        this.canvas = Canvas(800, 600);

        BackgroundColor(this.canvas, 'rgb(0, 0, 0)');

        AddToDOM(this.canvas, 'game');

        this.ctx = GetContext(this.canvas);

        this.starfield = new Starfield2DDot(800, 600);

        this.starfield.addLayer({ qty: 200, speedY: -2, color: '#108A84', starHeight: 2 });
        this.starfield.addLayer({ qty: 200, speedY: -3, color: '#19C3BA', starHeight: 4 });
        this.starfield.addLayer({ qty: 200, speedY: -4, color: '#22F7EC', starHeight: 6 });

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

    }

    draw (i) {

        this.starfield.render(i, this.ctx);

    }

}

new FX();
