import { circle } from 'lazer/geom';

const { Circle, Copy } = circle;

const Circle02Copy = () => {
	let a = Circle(50, 100, 32);
	let b = Circle(2, 8, 100);

	console.log('A', a.toString());
	console.log('B', b.toString());

	Copy(a, b);

	console.log('B after copy', b.toString());
};

export default Circle02Copy;
