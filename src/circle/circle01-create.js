import { circle } from 'lazer/geom';

const { Circle } = circle;


const Circle01Create = () => {
    let a = Circle(50, 100, 32);
    let b = Circle(200, 500, 1.5);

    console.log(a);
    console.log(b);
};

export default Circle01Create;

