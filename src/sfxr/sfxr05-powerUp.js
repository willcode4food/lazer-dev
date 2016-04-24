import Generate from 'lazer/sound/sfxr/webaudio/Generate';
import PowerUp from 'lazer/sound/sfxr/synths/PowerUp';
import rnd from 'lazer/sound/sfxr/Rand';
import frnd from 'lazer/sound/sfxr/RandFloat';

let params = PowerUp(rnd, frnd);
let sound = Generate(params);

console.log(params);
console.log(sound);

sound.play();
