import { circle } from 'lazer/geom';

const { Circle, Equals } = circle;

const Circle06Equals = () => {
    let a = Circle(0, 0, 64);
    let b = Circle(0, 0, 64.1);

    console.log(Equals(a,b));

    b.radius = 64;

    console.log(Equals(a,b));
};

export default Circle06Equals;

