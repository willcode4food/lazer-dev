import Generate from 'lazer/sound/sfxr/webaudio/Generate';
import PickUpCoin from 'lazer/sound/sfxr/synths/PickUpCoin';
import rnd from 'lazer/sound/sfxr/Rand';
import frnd from 'lazer/sound/sfxr/RandFloat';

let params = PickUpCoin(rnd, frnd);
let sound = Generate(params);

console.log(params);
console.log(sound);

sound.play();
