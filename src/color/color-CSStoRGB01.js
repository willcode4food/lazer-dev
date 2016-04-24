import CSStoRGB from 'lazer/graphics/color/CSStoRGB';

let { r, g, b } = CSStoRGB('wheat');

console.log('wheat', r, g, b);

console.log('lightskyblue', CSStoRGB('lightskyblue'));
