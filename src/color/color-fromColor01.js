import { color } from 'lazer/graphics';

const { BaseColor } = color;
const Color = BaseColor;

const ColorFromColor01 = () => {
	let purple = new Color.create(0xff00ff);
	let mold = new Color.create(0x39b54a);
	let aqua = new Color.create(0x8836a8f7);

	console.log(purple);
	console.log(mold);
	console.log(aqua);
};

export default ColorFromColor01;