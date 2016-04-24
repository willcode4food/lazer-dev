import Circle from 'lazer/geom/circle/Circle';
import Area from 'lazer/geom/circle/Area';

let a = Circle(0, 0, 64);

//  A≈12867.96
console.log('A', Area(a));
