import Generate from 'lazer/sound/sfxr/webaudio/Generate';
import BlipSelect from 'lazer/sound/sfxr/synths/BlipSelect';
import rnd from 'lazer/sound/sfxr/Rand';
import frnd from 'lazer/sound/sfxr/RandFloat';

let params = BlipSelect(rnd, frnd);
let sound = Generate(params);

console.log(params);
console.log(sound);

sound.play();
