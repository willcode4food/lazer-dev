import { circle } from 'lazer/geom';

const { Circle, Area } = circle;

const Circle05Area = () => {
	let a = Circle(0, 0, 64);
	//  A≈12867.96
	console.log('A', Area(a));

};

export default Circle05Area;

