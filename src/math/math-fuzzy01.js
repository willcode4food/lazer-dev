import * as FuzzyMath from 'lazer/math/Fuzzy';

console.log(FuzzyMath.equal(1, 2));
console.log(FuzzyMath.equal(1, 1));
console.log(FuzzyMath.equal(1.1, 1.2, 0.1));
