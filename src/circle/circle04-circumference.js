import { circle } from 'lazer/geom';

const { Circle, Circumference } = circle;

const Circle04Circumference = () => {
    let a = Circle(0, 0, 64);

    //  C≈402.12
    console.log('A', Circumference(a));
};

export default Circle04Circumference;