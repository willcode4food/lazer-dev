import { Canvas, BackgroundColor } from 'lazer/canvas';
import { AddToDOM } from 'lazer/dom';
import { RandomDataGenerator } from 'lazer/math';

const Canvas01Create = () => {
    let rnd = new RandomDataGenerator();

    let canvas = Canvas(512, 256);

    BackgroundColor(canvas, 'rgb(200, 50, 50)');

    AddToDOM(canvas, 'game');

    let ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgba(255, 255, 0, 0.5)';

    for (let i = 0; i < 64; i++)
    {
        ctx.fillRect(rnd.between(0, 500), rnd.between(0, 200), 32, 32);
    }
};
export default Canvas01Create;