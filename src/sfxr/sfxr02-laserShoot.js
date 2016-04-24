import Generate from 'lazer/sound/sfxr/webaudio/Generate';
import LaserShoot from 'lazer/sound/sfxr/synths/LaserShoot';
import rnd from 'lazer/sound/sfxr/Rand';
import frnd from 'lazer/sound/sfxr/RandFloat';

let params = LaserShoot(rnd, frnd);
let sound = Generate(params);

console.log(params);
console.log(sound);

sound.play();
