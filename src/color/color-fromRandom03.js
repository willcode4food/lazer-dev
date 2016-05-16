import { color } from 'lazer/graphics';

const { RandomRGB } = color;

const ColorFromRandom3 = () => {
	let { r, g, b } = RandomRGB();

	console.log(r, g, b);
};


export default ColorFromRandom3;