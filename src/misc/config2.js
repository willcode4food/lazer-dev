import Config from 'lazer/config/Config';
import Dimensions from 'lazer/config/settings/Dimensions';
import Transparent from 'lazer/config/settings/Transparent';
import GameTitle from 'lazer/config/settings/GameTitle';
import Banner from 'lazer/utils/Banner';

let config = Config(
    Dimensions(1024, 768),
    Transparent(false),
    GameTitle('Arkanoid 2', 'http://akrano.id')
);

console.log(config.get());

Banner(config.get('gameTitle').name, config.get('gameTitle').url);
