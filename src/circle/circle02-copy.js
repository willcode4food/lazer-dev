import Circle from 'lazer/geom/circle/Circle';
import Copy from 'lazer/geom/circle/Copy';

let a = Circle(50, 100, 32);
let b = Circle(2, 8, 100);

console.log('A', a.toString());
console.log('B', b.toString());

Copy(a, b);

console.log('B after copy', b.toString());
