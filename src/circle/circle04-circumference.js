import Circle from 'lazer/geom/circle/Circle';
import Circumference from 'lazer/geom/circle/Circumference';

let a = Circle(0, 0, 64);

//  C≈402.12
console.log('A', Circumference(a));
