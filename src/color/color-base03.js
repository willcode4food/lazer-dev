import { color } from 'lazer/graphics';

const { BaseColor } = color;
const Color = BaseColor;

const ColorBase02 = () => {
//  Even though 500 is an invalid value the 'red' setter clamps it within range
	color.red = 500;
	color.green = 50;
	color.blue = 50;

	console.log(color);

	console.log(color.toString());
};

export default ColorBase02;
