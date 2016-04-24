import Config from 'lazer/config/Config';
import Dimensions from 'lazer/config/settings/Dimensions';
import Transparent from 'lazer/config/settings/Transparent';
import Parent from 'lazer/config/settings/Parent';
import GameTitle from 'lazer/config/settings/GameTitle';
import DisableWebAudio from 'lazer/config/settings/DisableWebAudio';
import Banner from 'lazer/utils/Banner';

let config = Config(
    Transparent(false),
    GameTitle('Arkanoid'),
    DisableWebAudio(true)
);

//  Our Game requires the Dimensions, Parent and Transparent config objects.
//  We've only included Transparent so far, so we'll use 'requires' to set the rest.

config.require(
    Dimensions(),
    Parent(),
    Transparent(true)
);

console.log(config.get());

Banner(config.get('gameTitle').name, config.get('gameTitle').url);
