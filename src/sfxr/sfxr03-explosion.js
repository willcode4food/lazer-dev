import Generate from 'lazer/sound/sfxr/webaudio/Generate';
import Explosion from 'lazer/sound/sfxr/synths/Explosion';
import rnd from 'lazer/sound/sfxr/Rand';
import frnd from 'lazer/sound/sfxr/RandFloat';

let params = Explosion(rnd, frnd);
let sound = Generate(params);

console.log(params);
console.log(sound);

sound.play();
