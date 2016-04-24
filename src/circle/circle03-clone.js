import Circle from 'lazer/geom/circle/Circle';
import Clone from 'lazer/geom/circle/Clone';

let a = Circle(50, 100, 32);

console.log('A', a.toString());

let b = Clone(a);

console.log('B', b.toString());
