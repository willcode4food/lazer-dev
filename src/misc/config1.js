import Config from 'lazer/config/Config';
import Dimensions from 'lazer/config/settings/Dimensions';
import Transparent from 'lazer/config/settings/Transparent';

let config = Config(
    Dimensions(1024, 768),
    Transparent(false)
);

console.log(config.get());
