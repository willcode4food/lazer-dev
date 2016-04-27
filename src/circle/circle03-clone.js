import { circle } from 'lazer/geom';

const { Circle, Clone } = circle;

const Circle03Clone = () => {
    let a = Circle(50, 100, 32);

    console.log('A', a.toString());

    let b = Clone(a);

    console.log('B', b.toString());
};

export default Circle03Clone;