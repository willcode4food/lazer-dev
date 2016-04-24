import Circle from 'lazer/geom/circle/Circle';
import Equals from 'lazer/geom/circle/Equals';

let a = Circle(0, 0, 64);
let b = Circle(0, 0, 64.1);

console.log(Equals(a,b));

b.radius = 64;

console.log(Equals(a,b));
