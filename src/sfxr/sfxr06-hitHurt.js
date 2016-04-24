import Generate from 'lazer/sound/sfxr/webaudio/Generate';
import HitHurt from 'lazer/sound/sfxr/synths/HitHurt';
import rnd from 'lazer/sound/sfxr/Rand';
import frnd from 'lazer/sound/sfxr/RandFloat';

let params = HitHurt(rnd, frnd);
let sound = Generate(params);

console.log(params);
console.log(sound);

sound.play();
