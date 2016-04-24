import Generate from 'lazer/sound/sfxr/webaudio/Generate';
import Random from 'lazer/sound/sfxr/synths/Random';
import rnd from 'lazer/sound/sfxr/Rand';
import frnd from 'lazer/sound/sfxr/RandFloat';

let params = Random(rnd, frnd);
let sound = Generate(params);

console.log(params);
console.log(sound);

sound.play();
