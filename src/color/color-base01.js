import { color } from 'lazer/graphics';

const { BaseColor } = color;
const Color = BaseColor;

const ColorBase01 = () => {

	let red = new Color(255);

	//  Default is the # prefix
	console.log(red.toString());

	//  Or 0x prefix
	console.log(red.toString('0x'));
};

export default ColorBase01;