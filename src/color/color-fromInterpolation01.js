import { color } from 'lazer/graphics';
import { AddToDOM } from 'lazer/dom';
import { BackgroundColor, Canvas } from 'lazer/canvas';
const { BaseColor } = color;
const Color = BaseColor;


const ColorFromInterpolations01 = () => {
	let canvas = Canvas(512, 256);

	BackgroundColor(canvas, 'rgb(0, 0, 0)');

	AddToDOM(canvas, 'game');

	let ctx = canvas.getContext('2d');

	let sourceColor = new Color(255);
	let destColor = new Color(255, 0, 255);
	let mixColor = new Color();

	const length = 128;

	for (let i = 0; i < length; i++)
	{
		mixColor.fromInterpolation(sourceColor, destColor, length, i);
		ctx.fillStyle = mixColor.rgba;
		ctx.fillRect(0, i*2, 512, 2);
	}

};

export default ColorFromInterpolations01;
