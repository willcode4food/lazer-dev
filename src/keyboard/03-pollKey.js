import Key from 'lazer/input/keyboard/Key';
import * as KeyDown from 'lazer/input/keyboard/events/KeyDown';
import * as KeyUp from 'lazer/input/keyboard/events/KeyUp';
import * as ProcessKeyEvent from 'lazer/input/keyboard/ProcessKeyEvent';
import MainLoop from 'lazer/system/MainLoop';
import Canvas from 'lazer/canvas/Canvas';
import AddToDOM from 'lazer/dom/AddToDOM';
import BackgroundColor from 'lazer/canvas/BackgroundColor';
import Star from 'lazer/canvas/shapes/Star';

export default class CanvasGraphics {

    constructor () {

        this.canvas = Canvas(800, 600);

        BackgroundColor(this.canvas, 'rgb(50, 60, 70)');

        AddToDOM(this.canvas, 'game');

        this.ctx = this.canvas.getContext('2d');

        this.star = new Star({ x: 400, y: 300, fill: 'rgba(255, 255, 0, 1)' });

        //  Keyboard handler

        this.leftKey = Key('z');
        this.rightKey = Key('x');

        ProcessKeyEvent.list.add(this.leftKey);
        ProcessKeyEvent.list.add(this.rightKey);

        KeyDown.add(window, ProcessKeyEvent.down);
        KeyUp.add(window, ProcessKeyEvent.up);

        //  MainLoop

        this.loop = new MainLoop(60);

        this.loop.begin = (t => this.begin(t));
        this.loop.update = (delta => this.update(delta));
        this.loop.draw = (t => this.draw(t));

        this.loop.start();

    }

    begin () {

        this.ctx.clearRect(0, 0, 800, 600);

    }

    update (delta) {

        if (this.leftKey.isDown)
        {
            this.star.angle -= 2;
        }
        else if (this.rightKey.isDown)
        {
            this.star.angle += 2;
        }

    }

    draw (i) {

        this.star.draw(this.ctx, i);

    }

}

new CanvasGraphics();
