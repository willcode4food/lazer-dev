import { color } from 'lazer/graphics';

const { CSStoRGB } = color;

const ColorCSSToRGB01 = () => {
	let { r, g, b } = CSStoRGB('wheat');

	console.log('wheat', r, g, b);

	console.log('lightskyblue', CSStoRGB('lightskyblue'));

};

export default ColorCSSToRGB01;
