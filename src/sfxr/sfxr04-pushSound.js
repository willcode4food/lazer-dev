import Generate from 'lazer/sound/sfxr/webaudio/Generate';
import PushSound from 'lazer/sound/sfxr/synths/PushSound';
import rnd from 'lazer/sound/sfxr/Rand';
import frnd from 'lazer/sound/sfxr/RandFloat';

let params = PushSound(rnd, frnd);
let sound = Generate(params);

console.log(params);
console.log(sound);

sound.play();
