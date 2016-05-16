import { color } from 'lazer/graphics';
import { AddToDOM } from 'lazer/dom';
import { BackgroundColor, Canvas } from 'lazer/canvas';
const { BaseColor } = color;
const Color = BaseColor;

const ColorFromHSL01 = () => {
	let canvas = Canvas(512, 640);

	BackgroundColor(canvas, 'rgb(0, 0, 0)');

	AddToDOM(canvas, 'game');

	let ctx = canvas.getContext('2d');

	let color = new Color();

	for (let y = 0; y < 360; y++)
	{
		color.fromHSLColorWheel(y);
		ctx.fillStyle = color.rgba;
		ctx.fillRect(0, y*2, 512, 2);
	}
};

export default ColorFromHSL01;